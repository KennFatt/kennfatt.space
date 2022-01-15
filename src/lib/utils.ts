import { ImageLoader } from "next/image";

/**
 * Custom loader for NextJS Image component. It used to load all images from GraphCMS's storage.
 *
 * @see https://github.com/GraphCMS/graphcms-examples/tree/master/with-nextjs-image-loader
 */
export const graphCmsImageLoader: ImageLoader = ({ src, width }) => {
  const relativeSrc = src.split("/").pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc}`;
};
