import type { FC } from "react";

interface IContactItem {
  href: string;
  title: string;
  iconUrl: string;
}

/**
 * Domain specific component.
 * This component is only used to show List Item of footer's social conatct.
 */
export const ContactItem: FC<IContactItem> = ({ href, title, iconUrl }) => (
  <li>
    <a href={href} title={title} target="_blank" rel="noreferrer noopener">
      <img
        src={iconUrl}
        alt={title}
        className="pointer-events-none select-none"
      />
    </a>
  </li>
);
