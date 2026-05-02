"use client";
import classNames from "classnames";
import { TITLE } from "./constants";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import SectionBuilder from "@/HOC/SectionBuilder";
import { IconCloud } from "@/components/Icon-cloud/icon-cloud";
import { techStackImages } from "@/components/Icon-cloud/images";
import CanvasStars from "@/components/CanvasStars/CanvasStars";

function TechStack() {
  return (
    <div
      className={classNames(
        "w-[80%] mt-28",
        "flex flex-col justify-center",
        "items-center relative",
        "rounded-[41px] bg-slytherin-secondary",
        "h-125 md:h-186 lg:h-161.5",
      )}
    >
      <CanvasStars className="w-full h-full" />
      <div
        className={classNames(
          "flex flex-col justify-center absolute",
          "top-10 md:top-8 lg:top-12",
          "w-full text-center",
          "md:gap-26 lg:gap-8",
        )}
      >
        <BaseHeading level={2}>{TITLE}</BaseHeading>
        <div className="my-0 mx-auto">
          <IconCloud images={techStackImages} />
        </div>
      </div>
    </div>
  );
}

export default SectionBuilder(TechStack, "tech");
