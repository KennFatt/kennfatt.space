import type { FC, SyntheticEvent } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { ContactIconLinksGroup } from "components/base/ContactIconLinksGroup";
import { NavItemsGroup } from "components/base/NavItemsGroup";
import { SwitchThemeButton } from "components/base/SwitchThemeButton";

import { toggleSideNav, useSideNavStore } from "stores/sidenav.store";

import CloseSvg from "assets/vectors/close.svg";

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
  }, [isSideNavToggled, isMediumScreen]);

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
      className="bg-primary-dark/25 fixed inset-0 z-50"
      onClickCapture={offcanvasClicked}
    >
      <nav className="bg-base-light dark:bg-base-dark absolute top-0 right-0 flex flex-col justify-between w-full h-screen max-w-xs px-6">
        <div>
          {/* Toggle off side nav */}
          <div className="topnav-offset-h flex items-center justify-between">
            <SwitchThemeButton />

            <button onClick={toggleSideNav} className="outline-none">
              <CloseSvg className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <NavItemsGroup direction="vertical" space="s" />
        </div>

        <div className="pb-10">
          <hr className="border-base-light-dim dark:border-base-dark-dim mb-6 border" />

          {/* Contact */}
          <ul className="flex justify-between">
            <ContactIconLinksGroup />
          </ul>
        </div>
      </nav>
    </div>
  );
};
