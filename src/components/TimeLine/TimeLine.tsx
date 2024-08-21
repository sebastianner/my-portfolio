import { CSSProperties, useEffect, useRef, useState } from "react";
import TimeLineItem from "../TimeLineItem/TimeLineItem";
import { JOBS } from "./data";
import { useGetSectionHeight } from "@/hooks/useGetSectionHeight";
import styles from "./TimeLine.module.scss";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
import TimeLineIcon from "../TimeLineIcon/TimeLineIcon";

function TimeLine() {
  const { height } = useGetSectionHeight("work-time-line");
  const { width } = useGetWindowWidth();
  const parentDivRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(80);

  useEffect(() => {
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardHeight = entry.target.clientHeight;
            setTimelineHeight((prevHeight) => prevHeight + cardHeight);
            const workCard = entry.target.lastChild;
            if (workCard instanceof Element) {
              workCard.classList.add(styles.active);
            }
          }
        });
      },
      { threshold: 1 }
    );

    if (parentDivRef.current) {
      const childElements = parentDivRef.current.children;
      for (let index = 0; index < childElements.length; index++) {
        const element = childElements[index];
        lineObserver.observe(element);
      }
    }

    return () => lineObserver.disconnect();
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
            key={job.company}
            style={{ gridRow: index + 1, gridColumn: gridColumn, ...margin }}
          >
            <TimeLineIcon
              className={classNames(
                "absolute md:left-[50%] z-[3]",
                "md:ml-[-28px] ml-[8px] left-[5px]"
              )}
              image={{
                url: job.image.url,
                alt: job.image.alt,
                width: 60,
                height: 60,
              }}
              outlineColor={"#fff"}
            />
            <TimeLineItem
              backgroundColor={"#162e21"}
              className={classNames(slideInAnimationSide)}
              company={job.company}
              date={job.date}
              description={job.description}
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
