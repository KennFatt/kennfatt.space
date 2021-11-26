import type { AppProps } from "next/app";
import { Seo } from "components/utils/Seo";

import "../../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
