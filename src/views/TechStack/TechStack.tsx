"use client";
import CanvasSphere from "@/components/CanvasSphere/CanvasSphere";
import { GLOBAL_STYLES } from "@/global-styles";
import React from "react";
import { TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
import BaseHeading from "@/components/BaseHeading/BaseHeading";

function TechStack() {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center",
        "items-center w-screen pt-32"
      )}
    >
      <BaseHeading level={2}>{TITLE}</BaseHeading>
      <CanvasSphere />
    </div>
  );
}

export default SectionBuilder(TechStack, "techStack");
