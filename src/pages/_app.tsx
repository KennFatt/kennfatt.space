import { Router } from "next/router";
import type { AppPropsWithLayout } from "lib/common-types";
import NProgress from "nprogress";

import "styles/globals.scss";
import "styles/custom-nprogress.scss";

/** NProgress bootstrap */
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  /**
   * Impl Layout component across pages.
   * @see https://nextjs.org/docs/basic-features/layouts
   */
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
