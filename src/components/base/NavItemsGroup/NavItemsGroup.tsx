import clsx from "clsx";
import { useRouter } from "next/router";
import type { FC } from "react";

import { NavItem } from "components/base/NavItem";

import { TOP_LEVEL_NAV } from "lib/consts";

/**
 * Component NavItemsGroup's props.
 */
export interface INavItemsGroup {
  direction?: "horizontal" | "vertical";
  space?: "s" | "m" | "l";
}

/**
 * Component NavItemsGroup is used to be a container of `<NavItem>` component.
 * It responsible to render all available top-level navigation and consider
 *  their active state.
 *
 * This component is primarily used under `<TopNav>` or `<MobileSideNav>` component.
 *
 * ```javascriptreact
 * <NavItemsGroup
 *   direction="horizontal"
 *   space="m"
 * />
 * ```
 */
export const NavItemsGroup: FC<INavItemsGroup> = ({
  direction = "horizontal",
  space = "m",
}) => {
  const router = useRouter();
  const currentTopLevelPath = router.asPath.split("/")[1].toLowerCase();

  const directionClass = clsx({
    "flex-col items-center": direction === "vertical",
  });
  const spaceClass = clsx({
    // Horizontal
    "space-x-4": direction === "horizontal" && space === "s",
    "space-x-6": direction === "horizontal" && space === "m",
    "space-x-8": direction === "horizontal" && space === "l",

    // Vertical
    "space-y-4": direction === "vertical" && space === "s",
    "space-y-6": direction === "vertical" && space === "m",
    "space-y-8": direction === "vertical" && space === "l",
  });

  return (
    <ul
      className={`flex font-serif text-xl lg:text-2xl font-medium ${directionClass} ${spaceClass}`}
    >
      {TOP_LEVEL_NAV.map((pathName, idx) => (
        <NavItem
          key={idx}
          name={pathName}
          isActive={pathName === currentTopLevelPath}
        />
      ))}
    </ul>
  );
};
