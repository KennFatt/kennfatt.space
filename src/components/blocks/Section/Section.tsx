import type { FC, HTMLAttributes } from "react";
import { CenterContent } from "components/base/CenterContent";
import clsx from "clsx";

/**
 * Component Section's props.
 */
export interface ISection extends HTMLAttributes<HTMLElement> {
  space?: boolean;
  centerContent?: boolean;
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
  space = true,
  centerContent = true,
  children,
  ...rest
}) => {
  const spaceClassName = clsx({
    "py-12": space,
  });

  const content = centerContent ? (
    <CenterContent>{children}</CenterContent>
  ) : (
    children
  );

  return (
    <section className={spaceClassName} {...rest}>
      {content}
    </section>
  );
};
