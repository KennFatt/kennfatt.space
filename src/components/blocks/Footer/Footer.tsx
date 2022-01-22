import type { FC } from "react";
import { memo } from "react";

import { CenterContent } from "components/base/CenterContent";
import { ContactIconLinksGroup } from "components/base/ContactIconLinksGroup";

/**
 * Component Footer's props.
 */
export interface IFooter {}

/**
 * Component Footer
 */
export const Footer: FC<IFooter> = memo(() => {
  return (
    <footer className="border-primary-dark dark:border-primary-light  md:text-base text-sm border-b-[20px]">
      <CenterContent py="l">
        <hr className="border-base-light-dim dark:border-base-dark-dim w-full mb-6 border rounded-full" />

        <div className="flex items-center justify-between">
          <p>
            &copy; {new Date().getFullYear()} | Made with{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_CONTACT_GITHUB}/kennfatt.space`}
              target="_blank"
              rel="noreferrer noopener"
              title="Love"
              tabIndex={-1}
            >
              &hearts;
            </a>{" "}
            by <span className="font-medium">Kennan Fattahillah</span>
          </p>

          <ul className="md:flex hidden space-x-4">
            <ContactIconLinksGroup />
          </ul>
        </div>
      </CenterContent>
    </footer>
  );
});
Footer.displayName = "Footer";
