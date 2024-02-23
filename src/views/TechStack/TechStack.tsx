"use client";
import CanvasSphere from "@/components/CanvasSphere/CanvasSphere";
import { GLOBAL_STYLES } from "@/global-styles";
import React from "react";
import { TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";

function TechStack() {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center",
        "items-center w-screen pt-32"
      )}
    >
      <h2 className={GLOBAL_STYLES.title}>{TITLE}</h2>
      <CanvasSphere />
    </div>
  );
}

export default SectionBuilder(TechStack, "techStack");
