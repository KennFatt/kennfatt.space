import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    /** Only use analytic on production env. */
    let umamiAnalytic: JSX.Element | null = null;
    if (process.env.NODE_ENV !== "development") {
      const umamiScriptSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
      const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
      const umamiDomains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

      /** Set `NEXT_PUBLIC_UMAMI_SCRIPT_URL=""` to disable the Umami */
      const hasValidUmamiVariables =
        typeof umamiScriptSrc === "string" && umamiScriptSrc.length > 0;

      umamiAnalytic = hasValidUmamiVariables ? (
        <script
          async
          defer
          src={umamiScriptSrc}
          data-website-id={umamiWebsiteId}
          data-do-not-track="true"
          data-cache="true"
          data-domains={umamiDomains}
        ></script>
      ) : null;
    }

    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/sans/secularone-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/body/redhatdisplay-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="apple-touch-icon"
            href="/static/seo/apple-touch-icon.png"
          />

          <link rel="manifest" href="/static/seo/site.webmanifest" />
          <meta name="theme-color" content="#678349" />

          <meta
            name="google-site-verification"
            content="9mAMHbAn41ReTzc_4YZVdwEs1gv6RBr_ndSK6Qm6pLs"
          />

          {umamiAnalytic}
        </Head>

        <body className="document-base dark:text-base-text-dark dark:bg-base-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
