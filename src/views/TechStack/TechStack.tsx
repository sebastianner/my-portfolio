"use client";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { TITLE } from "./constants";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import CanvasSphere from "@/components/CanvasSphere/CanvasSphere";
import SectionBuilder from "@/HOC/SectionBuilder";

const CanvasStars = dynamic(
  () => import("@/components/CanvasStars/CanvasStars"),
  {
    ssr: false,
  }
);

function TechStack() {
  return (
    <div
      className={classNames(
        "w-[80%] mt-28",
        "flex flex-col justify-center",
        "items-center relative",
        "rounded-[41px] bg-slytherin-secondary",
        "h-[1000px] md:h-[840px] lg:h-[646px]"
      )}
    >
      <CanvasStars className="w-full h-full" />
      <div
        className={classNames(
          "flex flex-col justify-center absolute",
          "w-full text-center",
          "top-10 md:top-8 lg:top-16 xl:top-20"
        )}
      >
        <BaseHeading level={2}>{TITLE}</BaseHeading>
        <CanvasSphere />
      </div>
    </div>
  );
}

export default SectionBuilder(TechStack, "tech");
