import type { FC } from "react";
import Link from "next/link"
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
    const aClass = clsx({
        "text-primary-light border-b-2 border-primary-light": isActive,
        "transition-colors duration-300 hover:text-primary-light": !isActive
    })

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <li>
            <Link href={`/${name.toLowerCase()}`}>
                <a title={capitalizedName} className={`custom-outline ${aClass}`} tabIndex={1}>
                    {capitalizedName}
                </a>
            </Link>
        </li>
    );
};