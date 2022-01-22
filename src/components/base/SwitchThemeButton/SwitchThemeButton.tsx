import { useTheme } from "next-themes";
import { FC, useEffect, useMemo, useState } from "react";

import MoonSvg from "assets/vectors/moon.svg";
import SunSvg from "assets/vectors/sun.svg";

import styles from "./SwitchThemeButton.module.scss";

import clsx from "clsx";

/**
 * Component SwitchThemeButton's props.
 */
export interface ISwitchThemeButton {}

/**
 * Component SwitchThemeButton is a Button component to switch between dark and light theme.
 */
export const SwitchThemeButton: FC<ISwitchThemeButton> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const iconClass = clsx("w-6 h-6", styles["fade-in"]);

  const onSwitch = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => setIsMounted(true), []);

  const ThemeIcon = useMemo(
    () => (resolvedTheme === "light" ? SunSvg : MoonSvg),
    [resolvedTheme]
  );

  return (
    <button
      className="bg-base-light-dim dark:bg-base-dark-dim dark:border-base-dark-dim border-base-light-dim p-1 border-2 rounded-lg"
      onClick={onSwitch}
    >
      {!isMounted ? (
        <div className="w-6 h-6"></div>
      ) : (
        <ThemeIcon className={iconClass} />
      )}
    </button>
  );
};
SwitchThemeButton.displayName = "SwitchThemeButton";
