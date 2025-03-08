import clsx from "clsx";
import type { ReactNode, FC, ButtonHTMLAttributes } from "react";

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Size = "sm" | "md" | "lg";

export interface ButtonProps extends HTMLButtonProps {
  children: ReactNode;

  size?: Size;
  block?: boolean;
}

/**
 * Button is a ...
 *
 * @example
 * ```tsx
 * <Button  />
 * ```
 */
export const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  block,
  className,
  ...rest
}) => {
  const colorClassNames = `bg-primary-light hover:bg-primary-dark/75 text-base-light hover:text-base-light-dim dark:hover:bg-primary-light/75 transition-colors`;
  const shapeClassNames = clsx(
    {
      "w-full": block,
    },
    `rounded-md`
  );
  const typographyClassNames = clsx(
    {
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
    },
    `font-medium`
  );
  const spacingClassNames = clsx({
    "p-1": size === "sm",
    "p-2": size === "md",
    "py-2 px-3": size === "lg",
  });

  const classNames = [
    colorClassNames,
    shapeClassNames,
    typographyClassNames,
    spacingClassNames,
    className,
  ].join(" ");

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};
