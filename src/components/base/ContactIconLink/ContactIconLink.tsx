import type { FC, ImgHTMLAttributes } from "react";
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
  const imgProps: ImgHTMLAttributes<{}> = {
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
      >
        {imgContent}
      </a>
    </li>
  );
};
