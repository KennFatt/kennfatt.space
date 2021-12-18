import clsx from "clsx";
import type { CSSProperties, FC, ReactNode } from "react";

import { IsomorphicImage } from "components/utils/IsomorphicImage";

/**
 * Component SkillCard's props.
 */
export interface ISkillCard {
  /** Skill / expertise name */
  name: string;

  /** 3D image related with the skill */
  imageSrc: string;

  /** Image background color (ass CSS's `background-color` property value) */
  circleBackgroundColor?: string;

  /** Only accept text node as its children */
  children?: string | ReactNode[];
}

/**
 * Component SkillCard is a component to show my particular skill.
 *
 * ```javascriptreact
 * <SkillCard name="Project Management" imageSrc="/images/trello-3d.png">
 *  I love to manage and take most efficient way to work with a project. I use Trello to manage all my workflow.
 * </SkillCard>
 * ```
 */
export const SkillCard: FC<ISkillCard> = ({
  name,
  imageSrc,
  circleBackgroundColor,
  children,
}) => {
  const imageBackgroundColorStyle: CSSProperties = circleBackgroundColor
    ? {
        backgroundColor: circleBackgroundColor,
      }
    : {};
  const imageContainerClass = clsx({
    "bg-neutral-200": !circleBackgroundColor,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-48 h-48 rounded-full ${imageContainerClass}`}
        style={imageBackgroundColorStyle}
      >
        <IsomorphicImage
          src={imageSrc}
          srcFallback={imageSrc}
          alt={name}
          className="w-full h-full pointer-events-none select-none"
          width={192}
          height={192}
        />
      </div>

      {/* Name */}
      <span className="my-6 text-xl font-medium">{name}</span>

      {/* Description */}
      <p className="max-w-xs text-center">{children}</p>
    </div>
  );
};
