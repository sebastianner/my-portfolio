"use client";
import React from "react";
import TimeLineItem from "../TimeLineItem/TimeLineItem";

function TimeLine() {
  return (
    <TimeLineItem
      date={[new Date(2022, 3, 7), new Date(2023, 1, 7)]}
      title={""}
      company={""}
      description={""}
      backgroundColor={""}
      textColor={""}
    />
  );
}

export default TimeLine;
