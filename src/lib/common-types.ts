import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

/**
 * Override Next's App component props to add additional `getLayout` function.
 * It is used to let TypeScript understand some pages has static `.getLayout()` method in it.
 *
 * @see https://nextjs.org/docs/basic-features/layouts
 */
export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

/**
 * A type used inside our Next's App component (`pages/_app.tsx`).
 * @see https://nextjs.org/docs/basic-features/layouts
 */
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>;
};
