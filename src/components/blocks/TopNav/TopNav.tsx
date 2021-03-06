import Link from "next/link";
import { FC, memo } from "react";

import { CenterContent } from "components/base/CenterContent";
import { NavItemsGroup } from "components/base/NavItemsGroup";
import { SwitchThemeButton } from "components/base/SwitchThemeButton";

import { toggleSideNav } from "stores/sidenav.store";

import HamburgerSvg from "assets/vectors/hamburger.svg";

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
export const TopNav: FC<ITopNav> = memo(() => {
  return (
    <header className="bg-base-light/80 border-base-light dark:bg-base-dark/80 dark:border-base-dark backdrop-blur-sm sticky top-0 z-40 border">
      <CenterContent py="s">
        <nav className="flex items-center justify-between">
          {/* LHS */}
          <Link href="/">
            <a
              title="Kennan Fattahillah"
              className="text-primary-light md:text-6xl font-serif text-5xl outline-none"
            >
              KF
            </a>
          </Link>

          {/* RHS: desktop */}
          <div className="md:flex md:items-center md:space-x-6 hidden">
            <NavItemsGroup />
            <SwitchThemeButton />
          </div>

          {/* RHS: mobile */}
          <button className="md:hidden outline-none" onClick={toggleSideNav}>
            <HamburgerSvg className="w-6 h-6" />
          </button>
        </nav>
      </CenterContent>
    </header>
  );
});
TopNav.displayName = "TopNav";
