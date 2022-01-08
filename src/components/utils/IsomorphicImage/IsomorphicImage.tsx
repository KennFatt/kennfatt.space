import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";
import type { FC, HTMLAttributes } from "react";

import cn from "clsx";

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
  const [isLoading, setIsLoading] = useState(true);

  /**
   * The easiest way to achive "blur" effect from external image source.
   *
   * @see https://github.com/vercel/next.js/discussions/26168#discussioncomment-1863742
   */
  const blurImgClass = cn(
    props.className,
    "duration-700 ease-in-out",
    isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"
  );

  return process.env.NODE_ENV === "development" && !forceOptimize ? (
    <img src={srcFallback || src} {...props} />
  ) : (
    <Image
      src={srcFallback || src}
      {...props}
      className={blurImgClass}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};
