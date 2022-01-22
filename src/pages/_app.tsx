import { ThemeProvider } from "next-themes";
import { Router } from "next/router";
import NProgress from "nprogress";

import type { AppPropsWithLayout } from "types/custom-next-page.type";

import "styles/custom-nprogress.scss";
import "styles/globals.scss";

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

  return (
    <ThemeProvider attribute="class">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default MyApp;
