import HTMLReactParser from "html-react-parser/lib/index";
import React from "react";
import "./BaseHeading.scss";

type Props = { children: string; level: 1 | 2 | 3 | 4 | 5 | 6 };

const headingStyles = {
  1: "base-heading-level-1",
  2: "base-heading-level-2",
  3: "base-heading-level-3",
  4: "base-heading-level-4",
  5: "base-heading-level-5",
  6: "base-heading-level-6",
};

function BaseHeading({ level, children }: Props) {
  const parseHtmlToJsx = HTMLReactParser(children);
  return React.createElement(
    `h${level}`,
    { className: headingStyles[level] },
    parseHtmlToJsx
  );
}

export default BaseHeading;
