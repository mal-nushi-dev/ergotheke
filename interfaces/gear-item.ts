/**
 * Interface representing a gear item
 * @property {string} name - Display name of the gear
 * @property {string} slug - URL slug for routing
 * @property {string} description - Short description of the gear
 * @property {string} [externalUrl] - Optional external URL if the item links to an external site
 */
export interface GearItem {
  name: string;
  slug: string;
  description: string;
  externalUrl?: string;
}
