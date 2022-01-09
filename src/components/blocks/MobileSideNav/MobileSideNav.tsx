import type { FC, SyntheticEvent } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { ContactIconLinksGroup } from "components/base/ContactIconLinksGroup";
import { NavItemsGroup } from "components/base/NavItemsGroup";

import { toggleSideNav, useSideNavStore } from "stores/sidenav.store";

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
      <nav className="bg-base-light absolute top-0 right-0 flex flex-col justify-between w-full h-screen max-w-xs px-6">
        <div>
          {/* Toggle off side nav */}
          <div className="topnav-offset-h flex items-center justify-end">
            <button onClick={toggleSideNav} className="outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <NavItemsGroup direction="vertical" space="s" />
        </div>

        <div className="pb-10">
          <hr className="border-base-dim mb-6 border" />

          {/* Contact */}
          <ul className="flex justify-between">
            <ContactIconLinksGroup />
          </ul>
        </div>
      </nav>
    </div>
  );
};
