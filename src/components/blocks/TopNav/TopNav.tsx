import type { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { CenterContent } from "components/base/CenterContent";
import { NavItem } from "components/NavItem";
import type { INavItem } from "components/NavItem";

import { TOP_LEVEL_NAV } from "lib/consts";

/**
 * Component TopNav's props.
 */
export interface ITopNav { }

/**
 * Component TopNav is page's top level navigation.
 * It supposed to be the primary navigation for medium or larger screen device.
 *
 * The navigation items are generated based on the constant: TOP_LEVEL_NAV.
 *  And it should respect to my top level page in the sitemap.
 */
export const TopNav: FC<ITopNav> = () => {
  const router = useRouter();

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
            <a title="Kennan Fattahillah" className="text-primary-light text-6xl outline-none">
              KF
            </a>
          </Link>

          {/* RHS */}
          <ul className="md:flex hidden space-x-6 text-2xl font-medium">
            {navDestinations.map(({ name, isActive }, idx) => (
              <NavItem key={idx} name={name} isActive={isActive} />
            ))}
          </ul>
        </nav>
      </CenterContent>
    </header>
  );
};
