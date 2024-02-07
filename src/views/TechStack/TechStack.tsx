"use client";
import CanvasSphere from "@/components/CanvasSphere/CanvasSphere";
import { GLOBAL_STYLES } from "@/global-styles";
import React from "react";
import { TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";

function TechStack() {
  return (
    <div className="flex flex-col justify-center items-center w-screen p-10">
      <h3 className={GLOBAL_STYLES.title}>{TITLE}</h3>
      <CanvasSphere />
    </div>
  );
}

export default SectionBuilder(TechStack, "tech-stack");
