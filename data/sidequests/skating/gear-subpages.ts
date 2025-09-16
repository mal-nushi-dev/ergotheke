import type { GearItem } from "@/interfaces/gear-item";

/**
 * Array of gear items that represent subpages (or external links)
 * Each item includes a name, slug, description, and optionally an external URL.
 */
export const GearSubpages: GearItem[] = [
  {
    name: "The Original GRLSWIRL x Carver Surfskate",
    slug: "grlswirl_x_carver",
    description: "My very first surfskate and my daily rider.",
  },
  {
    name: 'Penny Ocean Mist 22" Penny Board',
    slug: "pennyboard_ocean_mist",
    description:
      "Bought this bad boy for traveling. Never once took it for traveling.",
  },
  {
    name: "Powell / Peralta / Rodriguez Skull and Sword Skateboard",
    slug: "powell_peralta",
    description:
      "A cool 80's style board that is configured as a skatepark board, but also a cruiser.",
  },
  {
    name: "Fila Legacy Pro 84 Roller Blade",
    slug: "fila_legacy_pro",
    description: "My very first pair of roller skates (thank you Sally).",
  },
  {
    name: "187 Killer Pads 6-Pack Set",
    slug: "killer_pads",
    description: "Can never be too careful.",
  },
  {
    name: "Protec Classic Skateboard Helmet CPSC",
    slug: "protec_helmet",
    description: "Can most definitely never be too careful.",
  },
];
