import classNames from "classnames";
import dynamic from "next/dynamic";
import React from "react";
import { WorkConstants } from "./constants";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import SectionBuilder from "@/HOC/SectionBuilder";

const TimeLine = dynamic(() => import("@/components/TimeLine/TimeLine"), {
  ssr: false,
});

function Work() {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center",
        "gap-12 pt-32"
      )}
    >
      <BaseHeading level={2}>{WorkConstants.title}</BaseHeading>
      <TimeLine />
    </div>
  );
}

export default SectionBuilder(Work, "experience");
