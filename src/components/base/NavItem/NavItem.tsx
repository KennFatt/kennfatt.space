import Link from "next/link";
import type { FC } from "react";

import clsx from "clsx";

/**
 * Component NavItem's props.
 */
export interface INavItem {
  name: string;
  isActive?: boolean;
}

/**
 * Component NavItem is used to be a Navigation item.
 * It either in TopNav or OffcanvasNav (mobile).
 */
export const NavItem: FC<INavItem> = ({ name, isActive }) => {
  const aClass = clsx(
    "w-full inline-block",
    isActive
      ? "text-primary-light"
      : "transition-colors duration-300 hover:text-primary-light"
  );

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <li className="w-full">
      <Link href={`/${name.toLowerCase()}`}>
        <a title={capitalizedName} className={aClass} tabIndex={1}>
          {capitalizedName}
        </a>
      </Link>
    </li>
  );
};
