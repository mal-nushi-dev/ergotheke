import type { GearItem } from "@/interfaces/gear-item";

/**
 * Array of gear items that represent subpages (or external links)
 * Each item includes a name, slug, description, and optionally an external URL.
 */
export const GearSubpages: GearItem[] = [
  {
    name: "Sony DSLR-A300",
    slug: "sony_dslr_a300",
    description: "An entry-level DSLR with live view and fast autofocus.",
  },
  {
    name: "Minolta X-370",
    slug: "minolta_x_370",
    description: "A classic Japanese 35mm film SLR.",
  },
];
