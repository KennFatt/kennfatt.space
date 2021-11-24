import type { FC } from "react";
import { CenterContent } from "components/base/CenterContent";
import { ContactItem } from "./ContactItem";

/**
 * Component Footer's props.
 */
export interface IFooter {}

/**
 * Component Footer
 */
export const Footer: FC<IFooter> = () => {
  return (
    <footer className="border-primary-dark md:text-base text-sm border-b-[20px]">
      <CenterContent py="l">
        <hr className="border-base-dim w-full mb-6 border rounded-full" />

        <div className="flex items-center justify-between">
          <p>
            &copy; 2021 | Made with{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_CONTACT_GITHUB}/kennfatt.space`}
              target="_blank"
              rel="noreferrer noopener"
              title="Love"
              tabIndex={-1}
            >
              &hearts;
            </a>{" "}
            by <span className="font-medium">Kennan Fattahillah</span>
          </p>

          <ul className="md:flex hidden space-x-4">
            <ContactItem
              href={`${process.env.NEXT_PUBLIC_CONTACT_GITHUB}`}
              title="GitHub"
              iconUrl="/static/vectors/socials/github.svg"
            />

            <ContactItem
              href={`${process.env.NEXT_PUBLIC_CONTACT_HACKERRANK}`}
              title="HackerRank"
              iconUrl="/static/vectors/socials/hackerrank.svg"
            />

            <ContactItem
              href={`${process.env.NEXT_PUBLIC_CONTACT_TWITTER}`}
              title="Twitter"
              iconUrl="/static/vectors/socials/twitter.svg"
            />

            <ContactItem
              href={`${process.env.NEXT_PUBLIC_CONTACT_DRIBBBLE}`}
              title="Dribbble"
              iconUrl="/static/vectors/socials/dribbble.svg"
            />

            <ContactItem
              href={`${process.env.NEXT_PUBLIC_CONTACT_LINKEDIN}`}
              title="LinkedIn"
              iconUrl="/static/vectors/socials/linkedin.svg"
            />
          </ul>
        </div>
      </CenterContent>
    </footer>
  );
};
