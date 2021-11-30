import type { FC } from "react";

import { CenterContent } from "components/base/CenterContent";

import styles from "./Hero.module.scss";

/**
 * Component Hero's props.
 */
export interface IHero {}

/**
 * Component Hero is supposed to be placed in the top. It has minimum height of
 *  100vh minus top header's height.
 */
export const Hero: FC<IHero> = () => {
  return (
    <section className="lg:text-6xl lg:leading-relaxed flex items-center text-3xl leading-relaxed min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-7.75rem)]">
      <CenterContent>
        <h1 className="font-serif">
          <span className={styles.highlighted}>Kennan Fattahillah</span> is a{" "}
          <span className={styles["strike-out"]}>Frontend Developer</span>{" "}
          <span className={styles.highlighted}>Creative Problem Solver</span>{" "}
          from Jakarta, Indonesia.
        </h1>
      </CenterContent>
    </section>
  );
};
