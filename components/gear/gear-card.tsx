import { safeString } from "@/utils/safe-string";
import type { GearItem } from "@/interfaces/gear-item";

export type GearCardProps = Pick<GearItem, "name" | "description">;

/**
 * GearCard component
 *
 * A presentational component that displays the visual card for a single gear item.
 * It renders a styled container with the gear's name and description.
 *
 * This component does not handle linking — it is meant to be wrapped by either
 * a Next.js `<Link>` for internal navigation or an `<a>` tag for external links.
 *
 * @param {GearCardProps} props - Component props derived from GearItem
 *
 * @returns {React.JSX.Element} A styled card element showing the gear details
 *
 * @example
 * <GearCard
 *   name="Penny Ocean Mist 22\" Penny Board"
 *   description="Bought this bad boy for traveling. Never once took it for traveling."
 * />
 */
export function GearCard({
  name,
  description,
}: GearCardProps): React.JSX.Element {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer h-full flex flex-col">
      <h3 className="text-md font-semibold mb-1">{safeString(name)}</h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-300 flex-grow">
        {safeString(description)}
      </p>
    </div>
  );
}
