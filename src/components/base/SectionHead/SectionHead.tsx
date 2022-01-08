import type { FC } from "react";

import clsx from "clsx";

type PositionAlignment = "left" | "middle" | "right";

/**
 * Component SectionHead's props.
 */
export interface ISectionHead {
  title: string;
  description?: string;

  /** Alignment for title, description, and line decorator. */
  positionAlignment?: PositionAlignment;
}

/**
 * Component SectionHead is a component to show a section's (refer to `<Section>` component) tagline.
 * It consists of what the section is all about (title) and additional bit information about the section (description).
 *
 * ```javascriptreact
 * <Section>
 *  <SectionHead title="My Writing" description="List of all my personal note and writing"/>
 * </Section>
 * ```
 */
export const SectionHead: FC<ISectionHead> = ({
  title,
  description,
  positionAlignment = "middle",
}) => {
  const positionAlignmentClass = clsx({
    "items-start text-left": positionAlignment === "left",
    "items-center text-center": positionAlignment === "middle",
    "items-end text-right": positionAlignment === "right",
  });

  return (
    <div
      className={`flex flex-col justify-center w-full mb-12 space-y-6 ${positionAlignmentClass}`}
    >
      <h2 className="md:text-5xl font-serif text-4xl">{title}</h2>

      {description && <p className="max-w-4xl">{description}</p>}

      <hr className="border-primary-light bg-primary-light w-32 border-2 rounded-full" />
    </div>
  );
};
