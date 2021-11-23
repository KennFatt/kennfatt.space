import type { FC } from "react";

/**
 * Component CenterContent's props.
 */
export interface ICenterContent { }

/**
 * Component CenterContent
 *
 * This is a container-like component that will center the `children`
 *  into the center of the viewport. It's meant to be responsive across screen sizes.
 */
export const CenterContent: FC<ICenterContent> = ({ children }) => {
  return (
    <div className="max-w-8xl md:px-8 w-full px-4 mx-auto">{children}</div>
  );
};
