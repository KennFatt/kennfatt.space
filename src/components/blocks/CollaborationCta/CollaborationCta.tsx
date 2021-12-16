import type { FC } from "react";
import { useEffect, useRef } from "react";

import { Section } from "../Section";

/**
 * Component CollaborationCta's props.
 */
export interface ICollaborationCta {}

/**
 * Component CollaborationCta is a block component that calling an action
 *  for the visitor to collab with me :)
 */
export const CollaborationCta: FC<ICollaborationCta> = () => {
  /** Workaroung to prevent my email exposed by bot */
  const mailToAnchor = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (mailToAnchor.current !== null) {
      mailToAnchor.current.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`;
    }
  }, []);

  return (
    <Section hasVerticalPadding centerContent>
      <div className="bg-base-dim md:px-14 rounded-xl md:py-12 px-7 py-6">
        <h3 className="md:text-3xl font-serif text-2xl">
          I&#39;m open to help and available for freelance opportunities and
          collaborations worldwide!
        </h3>
        <div className="md:flex-row md:space-x-6 md:space-y-0 flex flex-col mt-6 space-y-6">
          <p className="md:w-1/2">
            Feel free to ask me any question, or we can start turning our
            craziest idea into reality together.
          </p>
          <div className="md:w-1/2 flex items-center justify-center">
            <a
              ref={mailToAnchor}
              href="mailto:a@b.com"
              className="bg-primary-light hover:bg-primary-dark text-base-light hover:text-base-light/75 inline-block w-full py-2 font-medium text-center transition-colors rounded-lg"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
