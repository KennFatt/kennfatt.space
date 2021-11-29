import type { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Component Seo's props.
 */
export interface ISeo {
  title?: string;
  description?: string;
}

const defaultMeta = {
  title: "Kennan Fattahillah",
  description:
    "My space to share useful information for myself and hopefully for you too! The topic often about tech, books, or my thoughts about the world.",
  thumbnail: `${process.env.NEXT_PUBLIC_CANONICAL_URL}/static/images/tile-wide.png`,
};

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
    title: title ? `${title} | ${defaultMeta.title}` : defaultMeta.title,
    description: description || defaultMeta.description,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="author" content={defaultMeta.title} />
      <meta name="description" content={meta.description} />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_CANONICAL_URL}${router.asPath}`}
      />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_CANONICAL_URL}${router.asPath}`}
      />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={defaultMeta.thumbnail} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`${process.env.NEXT_PUBLIC_CANONICAL_URL}${router.asPath}`}
      />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={defaultMeta.thumbnail} />
    </Head>
  );
};
