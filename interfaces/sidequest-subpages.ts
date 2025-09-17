/**
 * Interface for the structure of subpages within a sidequest.
 *
 * @property {string} name - Display name of the subpage.
 * @property {string} slug - URL slug for routing.
 * @property {string} description - Short description of the subpage content.
 * @property {string} [externalUrl] - Optional external URL for linking outside the site.
 */
export interface SidequestSubpage {
  name: string;
  slug?: string;
  description: string;
  externalUrl?: string;
}
