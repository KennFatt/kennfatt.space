import type { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { CenterContent } from "components/base/CenterContent";
import { NavItem } from "components/NavItem";
import type { INavItem } from "components/NavItem";

import { toggleSideNav } from "stores/sidenav-store";

import { TOP_LEVEL_NAV } from "lib/consts";

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
export const TopNav: FC<ITopNav> = () => {
  const router = useRouter();

  /** TODO: store this into zustand store? and consume inside individual `<NavItem>` component? */
  const navDestinations: INavItem[] = TOP_LEVEL_NAV.map((pageName) => {
    /** take index n = because it's top level navigation */
    const currentPathName = router.asPath.split("/")[1].toLowerCase();

    return {
      name: pageName,
      isActive: currentPathName === pageName,
    };
  });

  return (
    <header>
      <CenterContent py="m">
        <nav className="flex items-center justify-between font-serif">
          {/* LHS */}
          <Link href="/">
            <a
              title="Kennan Fattahillah"
              className="text-primary-light text-6xl outline-none"
            >
              KF
            </a>
          </Link>

          {/* RHS: desktop */}
          <ul className="md:flex hidden space-x-6 text-2xl font-medium">
            {navDestinations.map(({ name, isActive }, idx) => (
              <NavItem key={idx} name={name} isActive={isActive} />
            ))}
          </ul>

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
};
