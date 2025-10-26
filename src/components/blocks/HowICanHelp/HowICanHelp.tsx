import type { FC } from "react";

import { SectionHead } from "components/base/SectionHead";
import { SkillCard } from "components/base/SkillCard";
import type { ISkillCard } from "components/base/SkillCard";

import { Section } from "../Section";
import styles from "./HowICanHelp.module.scss";

interface SkillCardsData extends ISkillCard {
  /** Unique identifer */
  id: string;

  /** A content for each SkillCard component. */
  description: string;
}

/**
 * Component HowICanHelp's props.
 */
export interface IHowICanHelp {
  skillCards?: SkillCardsData[];
}

/**
 * Component HowICanHelp is a bock (section) component to show and highlight all my expertises.
 */
export const HowICanHelp: FC<IHowICanHelp> = ({ skillCards }) => {
  if (skillCards?.length === 0 || !skillCards) {
    return null;
  }

  return (
    <Section id="how-i-can-help" centerContent hasVerticalPadding>
      <SectionHead title="How i can help" />

      <div className="overflow-hidden">
        {/* Snap container */}
        <div
          className={`snap-x flex space-x-20 px-[25vw] md:px-0 overflow-x-auto ${styles["hide-scrollbar"]}`}
        >
          {skillCards?.map(({ id, description, ...skilCardProps }) => (
            <div key={id} className="snap-center">
              <SkillCard {...skilCardProps}>{description}</SkillCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
