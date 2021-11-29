import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Seo } from "components/utils/Seo";

/** NProgress bootstrap */
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

import "styles/globals.scss";
import "styles/custom-nprogress.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
