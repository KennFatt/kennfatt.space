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
  const imgProps = {
    src: iconUrl,
    alt: title,
    className: "pointer-events-none select-none",
  };

  const imgContent = process.env.NODE_ENV ? (
    <img {...imgProps} />
  ) : (
    <Image {...imgProps} width={24} height={24} />
  );

  return (
    <li>
      <a
        href={href}
        title={title}
        target="_blank"
        rel="noreferrer noopener"
        tabIndex={-1}
        className="outline-none"
      >
        {imgContent}
      </a>
    </li>
  );
};
