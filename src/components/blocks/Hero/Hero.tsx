import type { CSSProperties, FC } from "react";

import { CenterContent } from "components/base/CenterContent";

import { useHeaderHeightStore } from "stores/header-height-store";

import styles from "./Hero.module.scss";

/**
 * Component Hero's props.
 */
export interface IHero {}

/**
 * Component Hero
 */
export const Hero: FC<IHero> = () => {
  const headerHeight = useHeaderHeightStore((state) => state.offsetHeight);
  const sectionStyle: CSSProperties = {
    height: `calc(100vh - ${headerHeight}px)`,
  };

  return (
    <section
      style={sectionStyle}
      className="lg:text-6xl lg:leading-relaxed flex items-center text-3xl leading-relaxed"
    >
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
