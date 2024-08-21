import classNames from "classnames";
import { format } from "date-fns";
import { CSSProperties } from "react";
// import styles from "./About.module.scss";

type Props = {
  date: (Date | string)[];
  title: string;
  company: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  className?: string;
  style?: CSSProperties;
};

function TimeLineItem({
  date,
  title,
  company,
  textColor,
  description,
  backgroundColor,
  className,
  style,
}: Props) {
  return (
    <article
      className={classNames(
        "job-article shadow-xl",
        "min-w-[200px] lg:max-w-[400px]",
        "rounded-md p-6 pt-5 relative",
        className
      )}
      style={{ backgroundColor: backgroundColor, color: textColor, ...style }}
    >
      <h3 className="font-semibold text-xl">{title}</h3>
      <h4 className="font-medium text-lg">{company}</h4>
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
}

export default TimeLineItem;
