import { memo } from "react";

import { Section } from "components/blocks/Section";
import { IsomorphicImage } from "components/utils/IsomorphicImage";

import palmTree from "../../../../public/static/images/palm-tree.png";

/**
 * Component ComingSoonMessage's props.
 */
export interface IComingSoonMessage {}

/**
 * Component ComingSoonMessage is used to be a "placeholder" for the page that currently has no content in it.
 */
export const ComingSoonMessage = memo(() => {
  return (
    <Section className="flex flex-col justify-center" centerContent isOnTop>
      <div className="flex flex-col items-center justify-center">
        {/* Image */}
        <div className="h-72 md:h-80 w-72 md:w-80 relative flex items-center justify-center mb-12">
          <IsomorphicImage
            src="/static/vectors/blob.svg"
            layout="fill"
            className="pointer-events-none select-none"
            alt="blob"
          />
          <IsomorphicImage
            src={palmTree}
            quality={10}
            layout="fill"
            placeholder="blur"
            className="absolute inset-0 pointer-events-none select-none"
            alt="Palm tree 3D Illustration by Zulfa Mahendra from Iconscout"
          />
        </div>

        {/* Text */}
        <h3 className="text-primary-light md:text-3xl font-serif text-xl text-center">
          The Content Will Be Here Soon!
        </h3>
      </div>
    </Section>
  );
});
ComingSoonMessage.displayName = "ComingSoonMessage";
