import HTMLReactParser from "html-react-parser/lib/index";
import React from "react";

export function htmlToJsx(
  htmlElement: string,
  props: React.HTMLAttributes<HTMLElement>,
  content: string
) {
  return React.createElement(htmlElement, props, HTMLReactParser(content));
}
