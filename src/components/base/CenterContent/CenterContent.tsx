import clsx from "clsx";
import type { FC } from "react";

type PaddingVariants = "s" | "m" | "l";

/**
 * Component CenterContent's props.
 */
export interface ICenterContent {
  px?: PaddingVariants;
  py?: PaddingVariants;
}

/**
 * Component CenterContent
 *
 * This is a container-like component that will center the `children`
 *  into the center of the viewport. It's meant to be responsive across screen sizes.
 *
 * default ~ medium breakpoint
 * - s => 8px ~ 16px
 * - m => 16px ~ 32px
 * - l => 24px ~ 48px
 */
export const CenterContent: FC<ICenterContent> = ({ px, py, children }) => {
  const paddingClass = clsx({
    // x-axis
    "px-2 md:px-4": px === "s",
    "px-4 md:px-8": px === "m",
    "px-6 md:px-12": px === "l" || !px, // default

    // y-axis
    "py-2 md:py-4": py === "s",
    "py-4 md:py-8": py === "m",
    "py-6 md:py-12": py === "l",
  });

  return (
    <div className={`max-w-6xl w-full mx-auto ${paddingClass}`}>{children}</div>
  );
};
