import { CSSProperties } from "react";
import styles from "./HamburgerMenuIcon.module.scss";

type Props = {
  className?: string;
  color?: string;
  isOpen: boolean;
};

function HamburgerMenuIcon({ className, color = "#fff", isOpen }: Props) {
  const backgroundColor: CSSProperties = { backgroundColor: color };

  return (
    <div
      aria-expanded={isOpen}
      className={`${styles.navIcon4} ${
        isOpen && styles.menuOpened
      } ${className}`}
    >
      <span style={backgroundColor}></span>
      <span style={backgroundColor}></span>
      <span style={backgroundColor}></span>
    </div>
  );
}

export default HamburgerMenuIcon;
