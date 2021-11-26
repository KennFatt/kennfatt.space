import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import type { FC } from "react";
import type { SyntheticEvent } from "react";

import { NavItemsGroup } from "components/base/NavItemsGroup";

import { useSideNavStore, toggleSideNav } from "stores/sidenav-store";

/**
 * Component MobileSideNav's props.
 */
export interface IMobileSideNav {}

/**
 * Component MobileSideNav is used to render side navigation on mobile device.
 * It's smart enough to maintain its own state (toggled on or off).
 */
export const MobileSideNav: FC<IMobileSideNav> = () => {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const isSideNavToggled = useSideNavStore((state) => state.isSideNavToggled);

  useEffect(() => {
    /** Disable scrolling */
    document.body.classList.toggle("overflow-hidden", isSideNavToggled);

    if (isSideNavToggled && isMediumScreen) {
      toggleSideNav();
    }
  }),
    [isSideNavToggled, isMediumScreen];

  /** Toggle the side nav off when clicking overlay element. */
  const offcanvasClicked = (ev: SyntheticEvent) => {
    if (ev.target === ev.currentTarget) {
      toggleSideNav();
    }
  };

  /** Render nothing if side nav is toggled off */
  if (!isSideNavToggled) {
    return null;
  }

  return (
    <div
      id="offcanvas"
      className="bg-primary-dark/25 fixed inset-0"
      onClickCapture={offcanvasClicked}
    >
      <nav className="bg-base-light absolute top-0 right-0 w-full h-screen max-w-xs">
        <NavItemsGroup direction="vertical" space="s" />
      </nav>
    </div>
  );
};
