import type { IContactIconLink } from "components/base/ContactIconLink";

import DribbleSvg from "assets/vectors/dribbble.svg";
import GithubSvg from "assets/vectors/github.svg";
import HackerRankSvg from "assets/vectors/hackerrank.svg";
import LeetCodeSvg from "assets/vectors/leetcode.svg";
import LinkedInSvg from "assets/vectors/linkedin.svg";
import TwitterSvg from "assets/vectors/twitter.svg";

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
    iconComponent: GithubSvg,
  },
  {
    title: "HackerRank",
    href: process.env.NEXT_PUBLIC_CONTACT_HACKERRANK || "",
    iconComponent: HackerRankSvg,
  },
  {
    title: "LeetCode",
    href: process.env.NEXT_PUBLIC_CONTACT_LEETCODE || "",
    iconComponent: LeetCodeSvg,
  },
  {
    title: "Twitter",
    href: process.env.NEXT_PUBLIC_CONTACT_TWITTER || "",
    iconComponent: TwitterSvg,
  },
  {
    title: "Dribbble",
    href: process.env.NEXT_PUBLIC_CONTACT_DRIBBBLE || "",
    iconComponent: DribbleSvg,
  },
  {
    title: "LinkedIn",
    href: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || "",
    iconComponent: LinkedInSvg,
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
