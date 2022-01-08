import type { FC, HTMLAttributes } from "react";

import { CenterContent } from "components/base/CenterContent";

import clsx from "clsx";

/**
 * Component Section's props.
 */
export interface ISection extends HTMLAttributes<HTMLElement> {
  /** Adding vertical space (py) inside the section */
  hasVerticalPadding?: boolean;

  /** Keep its children in the center of the page. Not a fluid. */
  centerContent?: boolean;

  /** Flag to set section's height == (100vh - top header's height) */
  isOnTop?: boolean;
}

/**
 * Component Section is used as a "uniform" for all sections in a page.
 * It has a vertical whitespace and a rule to center the content (children) it holds.
 *
 * ```javascriptreact
 * <Section>
 *  <div>A Content!</div>
 * </Section>
 * ```
 */
export const Section: FC<ISection> = ({
  hasVerticalPadding = false,
  centerContent = false,
  isOnTop = false,
  children,
  ...props
}) => {
  const { className, ...rest } = props;
  const dynamicPropClass = clsx({
    "py-12": hasVerticalPadding,
    "topnav-offset-vh": isOnTop,
  });
  const mergedClassName = dynamicPropClass.concat(
    ...[className ? " " + className : ""]
  );

  const content = centerContent ? (
    <CenterContent>{children}</CenterContent>
  ) : (
    children
  );

  return (
    <section className={mergedClassName} {...rest}>
      {content}
    </section>
  );
};
