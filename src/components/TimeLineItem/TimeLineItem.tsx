import classNames from "classnames";
import { format, isValid } from "date-fns";
import parse from "html-react-parser";
import { CSSProperties, ForwardedRef, forwardRef } from "react";
import BaseHeading from "../BaseHeading/BaseHeading";
import styles from "./TimeLineItem.module.scss";
import HTMLReactParser from "html-react-parser/lib/index";

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
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <article
      ref={ref}
      className={classNames(
        "h-fit bg-transparent",
        "job-article shadow-xl",
        "min-w-50 lg:max-w-112.5",
        "rounded-md p-6 pt-5 relative",
        styles.timeLineItem,
        className,
      )}
      data-index={dataIndex}
      style={{ color: textColor, ...style }}
    >
      <BaseHeading className="text-secondary-green" level={3}>
        {title}
      </BaseHeading>
      <BaseHeading level={4}>{company}</BaseHeading>
      <div className="font-normal my-2 text-lg md:text-xl [&_ul]:list-disc [&_ul]:ml-4 [&_li]:mb-1">
        {HTMLReactParser(description)}
      </div>
      {date.map((date, i) => {
        const transformDate = new Date(date);
        const dateTime = isValid(transformDate);
        return dateTime ? (
          <time
            key={transformDate.getDate() + i}
            className={classNames(
              "time font-normal text-base",
              "text-secondary-green",
            )}
            dateTime={format(transformDate, "yyy")}
          >
            {format(transformDate, "yyy")}
          </time>
        ) : (
          <span
            key={date as string}
            className={classNames(
              "capitalize font-normal text-base",
              "text-secondary-green",
            )}
          >
            {date as string}
          </span>
        );
      })}
    </article>
  );
});

export default TimeLineItem;
