import type { FC } from "react";

import { Section } from "../Section";
import styles from "./Hero.module.scss";

/**
 * Component Hero's props.
 */
export interface IHero {}

/**
 * Component Hero is supposed to be placed in the top of a page.
 */
export const Hero: FC<IHero> = () => {
  return (
    <Section
      className="md:text-6xl md:leading-relaxed flex items-center text-3xl leading-relaxed"
      hasVerticalPadding
      centerContent
      isOnTop
    >
      <h1 className="font-serif">
        <span className={styles.highlighted}>Kennan Fattahillah</span> is a{" "}
        <span className={styles["strike-out"]}>Frontend Developer</span>{" "}
        <span className={styles.highlighted}>Creative Problem Solver</span> from
        Jakarta, Indonesia.
      </h1>
    </Section>
  );
};
