import Card from "@/components/Card/Card";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH, INTRODUCTION, OVERVIEW, TITLE } from "./constants";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
import styles from "./About.module.scss";
import { useEffect, useReducer, useRef, useState } from "react";

type CardState = {
  [cardKey: string]: { position: number; isActive: boolean } | undefined;
};

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
    const refCopy = infoRef.current;
    const infoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInfoActive(true);
        }
      },
      { threshold: 1 }
    );
    if (refCopy) {
      infoObserver.observe(refCopy);
    }

    return () => {
      if (refCopy) {
        infoObserver.unobserve(refCopy);
      }
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.map((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              dispatchCard({
                [`card${index}`]: { position: index, isActive: true },
              });
            }
          },
          { threshold: 0.1 }
        );
        observers.push(observer);
        observer.observe(ref);
      }
    });
    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]);
        }
      });
    };
  }, [cardRefs]);

  return (
    <div
      className={classNames(
        "flex flex-col gap-12",
        "pt-14 px-6 sm:px-20 sm:pt-16",
        "max-w-7xl w-auto h-fit bg-slytherin-green",
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
          <h2 className={GLOBAL_STYLES.title}>{TITLE}</h2>
          <p className={GLOBAL_STYLES.paragraph}>{OVERVIEW}</p>
        </hgroup>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {HIGHLIGHTED_TECH.info.map((data, index) => {
          const isActive = cardStates[`card${index}`]?.isActive;
          return (
            <Card
              className={classNames(styles.card, { [styles.active]: isActive })}
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
