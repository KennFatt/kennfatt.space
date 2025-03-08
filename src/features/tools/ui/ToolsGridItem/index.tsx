import Link from "next/link";
import type { FC } from "react";

export interface ToolsGridItemProps {
  title: string;
  description?: string;
  href: string;
}

/**
 * ToolsGridItem is a ...
 *
 * @example
 * ```tsx
 * <ToolsGridItem />
 * ```
 */
export const ToolsGridItem: FC<ToolsGridItemProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <Link href={href}>
      <a className="group transition-colors rounded-lg p-2 border-2 bg-base-light-dim dark:bg-base-dark-dim dark:border-base-dark-dim border-base-light-dim space-y-4">
        {/* Title */}
        <h3 className="group-hover:text-primary-light transition-colors font-serif text-xl lg:text-2xl font-medium">
          {title}
        </h3>

        {/* Description */}
        {description ? <p>{description}</p> : <>&nbsp;</>}
      </a>
    </Link>
  );
};
