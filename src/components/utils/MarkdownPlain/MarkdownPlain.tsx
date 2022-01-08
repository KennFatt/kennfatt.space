import type { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "./MarkdownPlain.module.scss";

import clsx from "clsx";

/**
 * Component MarkdownPlain's props.
 */
export interface IMarkdownPlain {
  className?: string;
  children: string;
}

/**
 * Component MarkdownPlain is a wrapper component that uses `<ReactMarkdown>` without any additional plugins.
 * It is suitable for rendering small markdown content (not a blog post).
 */
export const MarkdownPlain: FC<IMarkdownPlain> = ({
  className: _className,
  children,
}) => {
  const markdownWrapperClass = clsx(styles["markdown-wrapper"], _className);

  return (
    <ReactMarkdown className={markdownWrapperClass}>{children}</ReactMarkdown>
  );
};
