import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import type { FC, CSSProperties } from "react";

import { Seo } from "components/utils/Seo";
import { TopNav } from "components/blocks/TopNav";
import { Footer } from "components/blocks/Footer";
import { MobileSideNav } from "components/blocks/MobileSideNav";

import {
  useHeaderHeightStore,
  setHeaderHeight,
} from "stores/header-height-store";
import type { IHeaderHeightStore } from "stores/header-height-store";

/**
 * Component PageBaseLayout's props.
 */
export interface IPageBaseLayout {
  pageName?: string;
  pageDescription?: string;
}

const headerHeightSelector = (state: IHeaderHeightStore) => state.offsetHeight;

/**
 * Component PageBaseLayout
 */
export const PageBaseLayout: FC<IPageBaseLayout> = ({
  pageName,
  pageDescription,
  children,
}) => {
  /**
   * `headerRef` is a reference to <header> element inside of <TopNav> component.
   * I'll take the height of this element to calculate another element's height, such as:
   * 1. Hero section height
   * 2. <main> element height
   */
  const headerRef = useRef<HTMLElement | null>(null);
  const headerHeight = useHeaderHeightStore(headerHeightSelector);

  useIsomorphicLayoutEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight);
  }, [headerRef.current?.offsetHeight]);

  const mainContentStyle: CSSProperties = {
    minHeight: `calc(100vh - ${headerHeight}px)`,
  };

  return (
    <>
      <Seo title={pageName} description={pageDescription} />

      <TopNav ref={headerRef} />
      <MobileSideNav />

      <main style={mainContentStyle}>{children}</main>

      <Footer />
    </>
  );
};
