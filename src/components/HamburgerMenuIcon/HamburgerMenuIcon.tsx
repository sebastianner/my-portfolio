"use client";
import { CSSProperties, useContext } from "react";
import styles from "./HamburgerMenuIcon.module.scss";
import { Context } from "@/context/context";

type Props = {
  className?: string;
  color?: string;
};

function HamburgerMenuIcon({ className, color = "#fff" }: Props) {
  const { AppState, dispatchAppState } = useContext(Context);
  const backgroundColor: CSSProperties = { backgroundColor: color };

  const isOpen = AppState.isHamburgerMenuOpen;

  const toggleOpenMenu = () => {
    dispatchAppState({ isHamburgerMenuOpen: !isOpen });
  };

  return (
    <button
      aria-expanded={isOpen}
      className={`${styles.navIcon4} ${
        isOpen && styles.menuOpened
      } ${className}`}
      onClick={toggleOpenMenu}
    >
      <span style={backgroundColor}></span>
      <span style={backgroundColor}></span>
      <span style={backgroundColor}></span>
    </button>
  );
}

export default HamburgerMenuIcon;
