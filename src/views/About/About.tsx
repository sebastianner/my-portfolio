"use client";
import Card from "@/components/Card/Card";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH, INTRODUCTION, OVERVIEW, TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
import styles from "./About.module.scss";
import { useEffect, useReducer, useRef, useState } from "react";
import { CardState } from "@/types/app";
import BaseHeading from "@/components/BaseHeading/BaseHeading";

function About() {
  const infoRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [isInfoActive, setIsInfoActive] = useState<boolean>(false);
  const [cardStates, dispatchCard] = useReducer(
    (prev: CardState, next: Partial<CardState>) => {
      return { ...prev, ...next };
    },
    {}
  );

  if (cardRefs.current.length !== HIGHLIGHTED_TECH.info.length) {
    cardRefs.current = HIGHLIGHTED_TECH.info.map(() => null);
  }

  useEffect(() => {
    const infoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInfoActive(true);
        }
      },
      { threshold: 0.5 }
    );
    if (infoRef.current) {
      infoObserver.observe(infoRef.current);
    }

    return () => infoObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            dispatchCard({
              [`card${index}`]: { position: index, isActive: true },
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [cardRefs]);

  return (
    <div
      className={classNames(
        "px-6 sm:px-20",
        "flex flex-col gap-12",
        "max-w-7xl w-auto h-fit",
        styles.about
      )}
    >
      <div
        className={classNames(`max-w-[80%]`, styles.aboutTextContainer, {
          [styles.active]: isInfoActive,
        })}
        ref={infoRef}
      >
        <span className={GLOBAL_STYLES.subtitle}>{INTRODUCTION}</span>
        <hgroup>
          <BaseHeading level={2}>{TITLE}</BaseHeading>
          <p className={GLOBAL_STYLES.paragraph}>{OVERVIEW}</p>
        </hgroup>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {HIGHLIGHTED_TECH.info.map((data, index) => {
          const isActive = cardStates[`card${index}`]?.isActive;
          return (
            <Card
              className={classNames(styles.card, { [styles.active]: isActive })}
              dataIndex={index}
              description={data.description}
              icon={data.icon}
              key={data.description}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              technology={data.technology}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SectionBuilder(About, "about");
