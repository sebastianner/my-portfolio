import classNames from "classnames";
import { format, isValid } from "date-fns";
import parse from "html-react-parser";
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
      <BaseHeading className="text-secondary-green" level={3}>
        {title}
      </BaseHeading>
      <BaseHeading level={4}>{company}</BaseHeading>
      <div className="font-normal my-2 text-xl"> {parse(description, {})}</div>
      {date.map((date, i) => {
        const transformDate = new Date(date);
        const dateTime = isValid(transformDate);
        return dateTime ? (
          <time
            className={classNames(
              "time font-normal text-base",
              "text-secondary-green"
            )}
            dateTime={format(transformDate, "yyy")}
            key={transformDate.getDate() + i}
          >
            {format(transformDate, "yyy")}
          </time>
        ) : (
          <span
            className={classNames(
              "capitalize font-normal text-base",
              "text-secondary-green"
            )}
            key={date as string}
          >
            {date as string}
          </span>
        );
      })}
    </article>
  );
});

export default TimeLineItem;
