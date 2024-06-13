"use client";
import Card from "@/components/Card/Card";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH, INTRODUCTION, OVERVIEW, TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
import styles from "./About.module.scss";
import { useEffect, useRef } from "react";

const aboutSectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const childNode = entries[0].target.childNodes[0];
    if (childNode instanceof Element) {
      childNode.classList.add(styles.active);
    }

    entries[0].target.childNodes[1].childNodes.forEach((child) => {
      if (child instanceof Element) {
        child.classList.add(styles.active);
      }
    });
  }
});

function About() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutSectionRef.current) {
      aboutSectionObserver.observe(aboutSectionRef.current);
    }
  }, []);

  return (
    <div
      className={classNames(
        "max-w-7xl w-auto h-fit bg-slytherin-green",
        "flex flex-col gap-12 px-6 sm:px-20 sm:pt-16",
        styles.about
      )}
      ref={aboutSectionRef}
    >
      <div className={classNames(`max-w-[80%]`, styles.aboutTextContainer)}>
        <span className={GLOBAL_STYLES.subtitle}>{INTRODUCTION}</span>
        <hgroup>
          <h2 className={GLOBAL_STYLES.title}>{TITLE}</h2>
          <p className={GLOBAL_STYLES.paragraph}>{OVERVIEW}</p>
        </hgroup>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {HIGHLIGHTED_TECH.info.map((data) => (
          <Card
            className={classNames(styles.card)}
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
