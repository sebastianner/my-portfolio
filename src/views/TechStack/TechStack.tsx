"use client";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { TITLE } from "./constants";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import CanvasSphere from "@/components/CanvasSphere/CanvasSphere";
import SectionBuilder from "@/HOC/SectionBuilder";
import { IconCloud } from "@/components/Icon-cloud/icon-cloud";
import { techStackImages } from "@/components/Icon-cloud/images";

const CanvasStars = dynamic(
  () => import("@/components/CanvasStars/CanvasStars"),
  {
    ssr: false,
  },
);

function TechStack() {
  return (
    <div
      className={classNames(
        "w-[80%] mt-28",
        "flex flex-col justify-center",
        "items-center relative",
        "rounded-[41px] bg-slytherin-secondary",
        "h-[1000px] md:h-[840px] lg:h-[646px]",
      )}
    >
      <CanvasStars className="w-full h-full" />
      <div
        className={classNames(
          "flex flex-col justify-center absolute",
          "top-10 md:top-8 lg:top-12",
          "w-full text-center",
          "gap-58 md:gap-36 lg:gap-6",
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
