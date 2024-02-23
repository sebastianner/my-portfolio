"use client";
import Card from "@/components/Cards/Cards";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH, INTRODUCTION, OVERVIEW, TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";

function About() {
  return (
    <div
      className={classNames(
        "max-w-7xl w-auto h-fit bg-slytherin-green",
        "flex flex-col gap-12 px-6 sm:px-20 sm:pt-16"
      )}
    >
      <div className="max-w-[80%]">
        <span className={GLOBAL_STYLES.subtitle}>{INTRODUCTION}</span>
        <h2 className={GLOBAL_STYLES.title}>{TITLE}</h2>
        <p className={GLOBAL_STYLES.paragraph}>{OVERVIEW}</p>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {HIGHLIGHTED_TECH.info.map((data) => (
          <Card
            key={data.description}
            technology={data.technology}
            icon={data.icon}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionBuilder(About, "about");
