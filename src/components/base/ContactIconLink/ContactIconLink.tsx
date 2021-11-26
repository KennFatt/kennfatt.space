import type { FC } from "react";
import Image from "next/image";

/**
 * Component ContactIconLink's props.
 */
export interface IContactIconLink {
  href: string;
  title: string;
  iconUrl: string;
}

/**
 * Component ContactIconLink
 */
export const ContactIconLink: FC<IContactIconLink> = ({
  href,
  title,
  iconUrl,
}) => {
  return (
    <li>
      <a
        href={href}
        title={title}
        target="_blank"
        rel="noreferrer noopener"
        tabIndex={-1}
      >
        <Image
          src={iconUrl}
          alt={title}
          className="pointer-events-none select-none"
          width={24}
          height={24}
        />
      </a>
    </li>
  );
};
