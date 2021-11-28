import { useRef, useState } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import type { FC } from "react";

import { Seo } from "components/utils/Seo";
import { TopNav } from "components/blocks/TopNav";
import { Footer } from "components/blocks/Footer";
import { MobileSideNav } from "components/blocks/MobileSideNav";

/**
 * Component PageBaseLayout's props.
 */
export interface IPageBaseLayout {
  pageName?: string;
  pageDescription?: string;
}

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
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);

  useIsomorphicLayoutEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight);
  }, [headerRef.current?.offsetHeight]);

  return (
    <>
      <Seo title={pageName} description={pageDescription} />

      <TopNav ref={headerRef} />
      <MobileSideNav />

      <main
        style={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
};
