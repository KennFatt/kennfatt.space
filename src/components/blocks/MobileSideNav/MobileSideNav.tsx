import { FC, useEffect } from "react";
import type { SyntheticEvent } from "react";
import { useMediaQuery } from "react-responsive";
import { useSideNavStore, toggleSideNav } from "stores/sidenav-store";

/**
 * Component MobileSideNav's props.
 */
export interface IMobileSideNav {}

/**
 * Component MobileSideNav
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
      <nav className="bg-base-light absolute top-0 right-0 w-full h-screen max-w-xs"></nav>
    </div>
  );
};
