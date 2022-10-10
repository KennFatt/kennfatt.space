import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";

import { SEO_META_FALLBACK } from "lib/consts";

/**
 * Component Seo's props.
 */
export interface ISeo {
  title?: string;
  description?: string;
}

/**
 * Component Seo is a helper component to prevent DRY to setup page's metadata.
 *
 * Example:
 * ```javascriptreact
 * // in a blog post page.
 * <Seo
 *  title="How to deal with undefined behaviour in C++"
 *  description="Guidance to help you to prevent UB in C++ with tools X, Y, and Z."
 * />
 * ```
 */
export const Seo: FC<ISeo> = ({ title, description }) => {
  const router = useRouter();

  const meta = {
    title: title
      ? `${title} | ${SEO_META_FALLBACK.title}`
      : SEO_META_FALLBACK.title,
    description: description || SEO_META_FALLBACK.description,
  };

  const canonicalUrl = `${process.env.NEXT_PUBLIC_CANONICAL_URL}${router.pathname}`;

  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="author" content={SEO_META_FALLBACK.title} />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={SEO_META_FALLBACK.thumbnail} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={SEO_META_FALLBACK.thumbnail} />
    </Head>
  );
};
