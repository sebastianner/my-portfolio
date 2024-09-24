import React from "react";
import "./BaseHeading.scss";

type Props = { level: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode };

const headingStyles = {
  1: "base-heading-level-1",
  2: "base-heading-level-2",
  3: "base-heading-level-3",
  4: "base-heading-level-4",
  5: "base-heading-level-5",
  6: "base-heading-level-6",
};

function BaseHeading({ level, children }: Props) {
  return React.createElement(
    `h${level}`,
    { className: headingStyles[level] },
    children
  );
}

export default BaseHeading;
