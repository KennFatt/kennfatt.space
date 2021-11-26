import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
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
        </Head>

        <body className="bg-base-light text-primary-dark selection:bg-primary-light selection:text-base-light text-lg tracking-wide">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
