"use client";
import { CSSProperties } from "react";
import styles from "./HamburgerMenuIcon.module.scss";
import { Context } from "@/context/context";
import classNames from "classnames";

type Props = {
  className?: string;
  color?: string;
  isOpen: boolean;
  onClick?: () => void;
};

function HamburgerMenuIcon({
  className,
  isOpen,
  color = "#fff",
  onClick,
}: Props) {
  const backgroundColor: CSSProperties = { backgroundColor: color };

  return (
    <button
      aria-expanded={isOpen}
      className={classNames(
        styles.navIcon4,
        isOpen && styles.menuOpened,
        className,
        "md:hidden",
      )}
      onClick={onClick}
    >
      <span style={backgroundColor}></span>
      <span style={backgroundColor}></span>
      <span style={backgroundColor}></span>
    </button>
  );
}

export default HamburgerMenuIcon;
