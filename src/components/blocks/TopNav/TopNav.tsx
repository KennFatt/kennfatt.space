import Link from "next/link";
import { forwardRef } from "react";

import { CenterContent } from "components/base/CenterContent";
import { NavItemsGroup } from "components/base/NavItemsGroup";

import { toggleSideNav } from "stores/sidenav-store";

/**
 * Component TopNav's props.
 */
export interface ITopNav {}

/**
 * Component TopNav is page's top level navigation.
 * It supposed to be the primary navigation for medium or larger screen device.
 *
 * The navigation items are generated based on the constant: TOP_LEVEL_NAV.
 *  And it should respect to my top level page in the sitemap.
 */
export const TopNav = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header ref={ref}>
      <CenterContent py="m">
        <nav className="flex items-center justify-between">
          {/* LHS */}
          <Link href="/">
            <a
              title="Kennan Fattahillah"
              className="text-primary-light font-serif text-6xl outline-none"
            >
              KF
            </a>
          </Link>

          {/* RHS: desktop */}
          <div className="md:block hidden">
            <NavItemsGroup />
          </div>

          {/* RHS: mobile */}
          <button className="md:hidden outline-none" onClick={toggleSideNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </CenterContent>
    </header>
  );
});
TopNav.displayName = "TopNav";
