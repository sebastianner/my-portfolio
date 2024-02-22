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
        "items-center w-screen p-10"
      )}
    >
      <h3 className={GLOBAL_STYLES.title}>{TITLE}</h3>
      <CanvasSphere />
    </div>
  );
}

export default SectionBuilder(TechStack, "tech-stack");
