import type { IContactIconLink } from "components/base/ContactIconLink";

/**
 * Top (first) level navigation in the sitemap.
 * It should reflect to the actual pages that user can be navigated on.
 *
 * Primarily used in navigation component.
 */
export const TOP_LEVEL_NAV = ["about", "blog", "projects", "stars"];

/**
 * List of all my contact and its URL.
 * It primarily used for `<ContactIconLink>` component.
 */
export const CONTACT_LIST: IContactIconLink[] = [
  {
    title: "GitHub",
    href: process.env.NEXT_PUBLIC_CONTACT_GITHUB || "",
    iconUrl: "/static/vectors/socials/github.svg",
  },
  {
    title: "HackerRank",
    href: process.env.NEXT_PUBLIC_CONTACT_HACKERRANK || "",
    iconUrl: "/static/vectors/socials/hackerrank.svg",
  },
  {
    title: "Twitter",
    href: process.env.NEXT_PUBLIC_CONTACT_TWITTER || "",
    iconUrl: "/static/vectors/socials/twitter.svg",
  },
  {
    title: "Dribbble",
    href: process.env.NEXT_PUBLIC_CONTACT_DRIBBBLE || "",
    iconUrl: "/static/vectors/socials/dribbble.svg",
  },
  {
    title: "LinkedIn",
    href: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || "",
    iconUrl: "/static/vectors/socials/linkedin.svg",
  },
];

/**
 * Default meta content for SEO related things.
 */
export const SEO_META_FALLBACK = {
  title: "Kennan Fattahillah",
  description:
    "My space to share useful information for myself and hopefully for you too! The topic often about tech, books, or my thoughts about the world.",
  thumbnail: `${process.env.NEXT_PUBLIC_CANONICAL_URL}/static/seo/tile-wide.png`,
};
