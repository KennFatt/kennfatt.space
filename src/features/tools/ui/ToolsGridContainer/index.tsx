import type { FC } from "react";
import { ToolsGridItem, type ToolsGridItemProps } from "../ToolsGridItem/index";

export interface ToolsGridContainerProps {
  tools?: ToolsGridItemProps[];
}

/**
 * ToolsGridContainer is a ...
 *
 * @example
 * ```tsx
 * <ToolsGridContainer />
 * ```
 */
export const ToolsGridContainer: FC<ToolsGridContainerProps> = ({ tools }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tools?.map((tool, index) => (
        <ToolsGridItem
          key={index}
          title={tool.title}
          href={tool.href}
          description={tool?.description}
        />
      ))}
    </div>
  );
};
