import type { FC, HTMLAttributes } from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";

type ImageOverrideProps = HTMLAttributes<HTMLImageElement> & ImageProps;

/**
 * Component IsomorphicImage's props.
 */
export interface IIsomorphicImage extends ImageOverrideProps {
  src: any;
  alt?: string;

  /** A URL fallback if `src` is an object of `StaticImageData`. */
  srcFallback?: string;

  /** Flag to force to use `<Image>` component. Useful for some cases. */
  forceOptimize?: boolean;
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
export const IsomorphicImage: FC<IIsomorphicImage> = ({
  forceOptimize = false,
  src,
  srcFallback,
  ...props
}) => {
  return process.env.NODE_ENV === "development" && !forceOptimize ? (
    <img src={srcFallback || src} {...props} />
  ) : (
    <Image src={src} {...props} />
  );
};
