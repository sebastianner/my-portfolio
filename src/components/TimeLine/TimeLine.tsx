"use client";
import React, { CSSProperties, useEffect, useRef } from "react";
import TimeLineItem from "../TimeLineItem/TimeLineItem";
import { JOBS } from "./data";
import { useGetSectionHeight } from "@/hooks/useGetSectionHeight";
import styles from "./TimeLine.module.scss";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import SectionBuilder from "@/HOC/SectionBuilder";

function TimeLine() {
  const { height } = useGetSectionHeight("work-time-line");
  const { width } = useGetWindowWidth();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.style.setProperty("--height", `${height}px`);
  }, [height]);

  return (
    <div className={`${styles.timeLine} pl-16 pr-4 md:p-0`} ref={divRef}>
      {JOBS.map((job, index) => {
        let gridColumn = (index + 1) % 2 ? 1 : 2;
        let margin: CSSProperties =
          gridColumn === 1 ? { marginRight: 50 } : { marginLeft: 50 };
        if (width < 768) {
          margin = { margin: 0 };
          gridColumn = 1;
        }
        return (
          <TimeLineItem
            date={job.date}
            title={job.title}
            company={job.company}
            description={job.description}
            backgroundColor={"#162e21"}
            textColor={"#fff"}
            style={{ gridRow: index + 1, gridColumn: gridColumn, ...margin }}
            key={job.company}
            image={{
              url: job.image.url,
              alt: job.image.alt,
            }}
          />
        );
      })}
    </div>
  );
}

export default SectionBuilder(TimeLine, "work-time-line");
