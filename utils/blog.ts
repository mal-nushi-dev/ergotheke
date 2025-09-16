import fs from "fs";
import path from "path";

/**
 * Metadata for a blog post, parsed from the frontmatter of an MDX file.
 *
 * @property {string} title - The title of the blog post.
 * @property {string} publishedAt - The publication date of the blog post.
 * @property {string} summary - A brief summary of the blog post.
 * @property {string} [image] - An optional image URL associated with the blog post.
 */
type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

/**
 * Parses the frontmatter metadata and content from a string and content from a string containing an MDX file.
 *
 * @param {string} fileContent - The raw content of the MDX file as a string.
 * @returns {{ metadata: Metadata; content: string }} An object containing the parsed metadata and the main content of the MDX file.
 */
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

/**
 * Returns a list of `.mdx` files from the specified directory.
 *
 * @param {string} dir - The directory to search for MDX files.
 * @returns {string[]} An array of file names (without extensions) for all `.mdx` files in the directory.
 */
function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 * Reads an MDX file from disk and parses its frontmatter and content.
 *
 * @param {string} filePath - The path to the MDX file.
 * @returns {{ metadata: Metadata, content: string }} The parsed metadata and content.
 */
function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * Aggregates metadata and content from all MDX files in a directory.
 *
 * @param {string} dir - The directory containing MDX files.
 * @returns {Array<{ metadata: Metadata, slug: string, content: string }>} An array of objects for each MDX file.
 */
function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

/**
 * Loads all blog posts from the `/app/blog/posts` directory.
 *
 * @returns {Array<{ metadata: Metadata, slug: string, content: string }>} An array of blog post objects.
 */
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

/**
 * Formats a date string into a human-readable form, and optionally adds relative time (e.g., "2d ago").
 *
 * @param {string} date - The date string to format (YYYY-MM-DD or ISO).
 * @param {boolean} [includeRelative=false] - Whether to include relative time.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
