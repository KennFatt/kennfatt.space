import type { ElementType, FC, ReactNode } from "react";

/**
 * Component ContactIconLink's props.
 */
export interface IContactIconLink {
  href: string;
  title: string;

  /** SVG or anything that represent react node. */
  iconComponent?: ReactNode;
}

/**
 * Component ContactIconLink
 */
export const ContactIconLink: FC<IContactIconLink> = ({
  href,
  title,
  iconComponent,
}) => {
  /**
   * It is necessary to cast as ElementType so TS would not complain.
   *
   * @see https://stackoverflow.com/a/60323737/6569706
   */
  const IconComponent = iconComponent as ElementType;

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
        {iconComponent && <IconComponent />}
      </a>
    </li>
  );
};
