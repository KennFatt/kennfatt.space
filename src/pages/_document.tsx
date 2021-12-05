import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const umamiScriptSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
    const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const umamiAnalytic =
      typeof umamiScriptSrc === "string" && umamiScriptSrc.length > 0 ? (
        <script
          async
          defer
          src={umamiScriptSrc}
          data-website-id={umamiWebsiteId}
          data-do-not-track="true"
          data-cache="true"
        ></script>
      ) : null;

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

          <link rel="icon" href="/static/seo/favicon.ico" sizes="any" />
          <link
            rel="apple-touch-icon"
            href="/static/seo/apple-touch-icon.png"
          />

          <link rel="manifest" href="/static/seo/site.webmanifest" />
          <meta name="theme-color" content="#678349" />

          {umamiAnalytic}
        </Head>

        <body className="document-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
