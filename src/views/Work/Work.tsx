"use client";
import classNames from "classnames";
import { WorkConstants } from "./constants";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import SectionBuilder from "@/HOC/SectionBuilder";
import TimeLine from "@/components/TimeLine/TimeLine";
import { WorkSectionType } from "@/types/content.types";

type Props = {
  content: WorkSectionType;
};

function Work({ content }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center",
        "gap-12 pt-32",
      )}
    >
      <BaseHeading level={2}>{WorkConstants.title}</BaseHeading>
      <TimeLine content={content} />
    </div>
  );
}

export default SectionBuilder(Work, "experience");
