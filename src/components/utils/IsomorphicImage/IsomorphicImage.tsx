import type { FC, HTMLAttributes } from "react";
import Image from "next/image";

/**
 * Component IsomorphicImage's props.
 *
 * Please refer to ImageProps from "next/image" for the type definitions.
 */
export interface IIsomorphicImage extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;

  width?: number | string;
  height?: number | string;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive" | undefined;

  loader?: (resolverProps: {
    src: string;
    width: number;
    quality?: number;
  }) => string;

  quality?: number | string;
  priority?: boolean;
  loading?: "lazy" | "eager" | undefined;
  lazyBoundary?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  unoptimized?: boolean;

  objectFit?: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  objectPosition?: NonNullable<
    JSX.IntrinsicElements["img"]["style"]
  >["objectPosition"];

  onLoadingComplete?: (result: {
    naturalWidth: number;
    naturalHeight: number;
  }) => void;
}

/**
 * Component IsomorphicImage is an implementation of Next's Image component
 *  but only for production environment.
 *
 * If it does not in production, then use default HTML semantic <img> element.
 *
 * The main purpose of this workaround is to prevent high calculation due compression and optimization
 *  when developing the app.
 */
export const IsomorphicImage: FC<IIsomorphicImage> = (props) => {
  return process.env.NODE_ENV === "development" ? (
    <img {...props} />
  ) : (
    <Image {...props} />
  );
};
