export const baseUrl: string =
  process.env.NODE_ENV === "production"
    ? "https://www.malnushi.com"
    : "http://localhost:3000";

export const siteTitle: string = "Mal Nushi";
export const siteDescription: string = "Mal Nushi's Personal Website";
