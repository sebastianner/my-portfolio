import classNames from "classnames";
import { CSSProperties, useEffect, useReducer, useRef, useState } from "react";
import TimeLineIcon from "../TimeLineIcon/TimeLineIcon";
import TimeLineItem from "../TimeLineItem/TimeLineItem";
import { JOBS } from "./data";
import styles from "./TimeLine.module.scss";
import SectionBuilder from "@/HOC/SectionBuilder";
import { useGetSectionHeight } from "@/hooks/useGetSectionHeight";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import { CardState } from "@/types/app";

function TimeLine() {
  const { height } = useGetSectionHeight("work-time-line");
  const { width } = useGetWindowWidth();
  const parentDivRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [timelineHeight, setTimelineHeight] = useState(80);
  const [cardStates, dispatchCard] = useReducer(
    (prev: CardState, next: Partial<CardState>) => {
      return { ...prev, ...next };
    },
    {}
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          const cardHeight = entry.target.clientHeight;
          if (!Number.isNaN(index)) {
            if (entry.isIntersecting) {
              setTimelineHeight((prevHeight) => prevHeight + cardHeight);
              dispatchCard({
                [`card${index}`]: { isActive: true, position: index },
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (parentDivRef.current) {
      parentDivRef.current.style.setProperty("--height", `${timelineHeight}px`);
      if (height) {
        parentDivRef.current.style.setProperty("--max-height", `${height}px`);
      }
    }
  }, [timelineHeight, height]);

  return (
    <div
      className={classNames(styles.timeline, "pl-16 pr-4 md:p-0")}
      ref={parentDivRef}
    >
      {JOBS.map((job, index) => {
        const isActive = cardStates[`card${index}`]?.isActive;
        let gridColumn = (index + 1) % 2 ? 1 : 2;
        let margin: CSSProperties =
          gridColumn === 1 ? { marginRight: 50 } : { marginLeft: 50 };
        const slideInAnimationSide =
          gridColumn === 1 ? styles.timeLineCardLeft : styles.timeLineCardRight;
        if (width < 768) {
          margin = { margin: 0 };
          gridColumn = 1;
        }
        return (
          <div
            className="pr-5"
            key={job.company}
            style={{ gridColumn: gridColumn, gridRow: index + 1, ...margin }}
          >
            <TimeLineIcon
              className={classNames(
                "absolute md:left-[50%] z-3",
                "md:ml-[-28px] ml-[8px] left-[5px]"
              )}
              image={{
                alt: job.image.alt,
                url: job.image.url,
              }}
            />
            <TimeLineItem
              className={classNames(slideInAnimationSide, {
                [styles.active]: isActive,
              })}
              company={job.company}
              dataIndex={index}
              date={job.date}
              description={job.description}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              textColor={"#fff"}
              title={job.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SectionBuilder(TimeLine, "work-time-line");
