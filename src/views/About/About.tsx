"use client";
import Card from "@/components/Card/Card";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH, INTRODUCTION, OVERVIEW, TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
import styles from "./About.module.scss";

function About() {
  return (
    <div
      className={classNames(
        "max-w-7xl w-auto h-fit bg-slytherin-green",
        "flex flex-col gap-12 px-6 sm:px-20 sm:pt-16",
        styles.about
      )}
    >
      <div className="max-w-[80%]">
        <span className={GLOBAL_STYLES.subtitle}>{INTRODUCTION}</span>
        <hgroup>
          <h2 className={GLOBAL_STYLES.title}>{TITLE}</h2>
          <p className={GLOBAL_STYLES.paragraph}>{OVERVIEW}</p>
        </hgroup>
      </div>
      <div className="w-full flex flex-wrap gap-8 cardContainer">
        {HIGHLIGHTED_TECH.info.map((data) => (
          <Card
            description={data.description}
            icon={data.icon}
            key={data.description}
            technology={data.technology}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionBuilder(About, "about");
