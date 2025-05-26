import { baseUrl } from 'app/sitemap'

/**
 * Generates the robots.txt configuration for the site.
 * This config allows all user agents and provides the sitemap location.
 * 
 * @returns  {Object} An object representing robots.txt rules and sitemap URL.
 */
export default function robots(): object {
  return {
    // Define crawling rules for all user agents
    rules: [
      {
        userAgent: '*',
      },
    ],
    // Specify the location of the sitemap
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
