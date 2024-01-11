import CanvasSphere from "@/components/CanvasSphere/CanvasSphere";
import { GLOBAL_STYLES } from "@/global-styles";
import React from "react";
import { TITLE } from "./constants";

function Technologies() {
  return (
    <div className="flex flex-col justify-center items-center w-screen p-10">
      <h3 className={GLOBAL_STYLES.title}>{TITLE}</h3>
      <CanvasSphere />
    </div>
  );
}

export default Technologies;
