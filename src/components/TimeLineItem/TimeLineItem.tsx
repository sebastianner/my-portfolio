import classNames from "classnames";
import { format } from "date-fns";
import { CSSProperties, ForwardedRef, forwardRef } from "react";
import BaseHeading from "../BaseHeading/BaseHeading";
import styles from "./TimeLineItem.module.scss";

type Props = {
  className?: string;
  company: string;
  dataIndex?: number;
  date: (Date | string)[];
  description: string;
  style?: CSSProperties;
  textColor: string;
  title: string;
};

const TimeLineItem = forwardRef(function TimeLineItem(
  {
    date,
    title,
    company,
    textColor,
    description,
    className,
    dataIndex,
    style,
  }: Props,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <article
      className={classNames(
        "job-article shadow-xl",
        "min-w-[200px] lg:max-w-[400px]",
        "rounded-md p-6 pt-5 relative",
        "bg-transparent",
        styles.timeLineItem,
        className
      )}
      data-index={dataIndex}
      ref={ref}
      style={{ color: textColor, ...style }}
    >
      <BaseHeading level={3}>{title}</BaseHeading>
      <BaseHeading level={4}>{company}</BaseHeading>
      <p className="font-normal my-2">{description}</p>
      {date.map((date, i) => {
        const dateTime = date instanceof Date;
        return dateTime ? (
          <time
            className="time font-light"
            dateTime={format(date, "yyy")}
            key={date.getDate() + i}
          >
            {format(date, "yyy")}
          </time>
        ) : (
          <span className="capitalize" key={date}>
            {date}
          </span>
        );
      })}
    </article>
  );
});

export default TimeLineItem;
