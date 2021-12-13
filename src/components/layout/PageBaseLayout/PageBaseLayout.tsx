import type { FC } from "react";

import { ComingSoonMessage } from "components/base/ComingSoonMessage";
import { Footer } from "components/blocks/Footer";
import { MobileSideNav } from "components/blocks/MobileSideNav";
import { TopNav } from "components/blocks/TopNav";
import { Seo } from "components/utils/Seo";

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
  return (
    <>
      <Seo title={pageName} description={pageDescription} />

      <TopNav />
      <MobileSideNav />

      <main className="min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-7.75rem)]">
        {children || <ComingSoonMessage />}
      </main>

      <Footer />
    </>
  );
};
