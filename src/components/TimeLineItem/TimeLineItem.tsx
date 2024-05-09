import { format } from "date-fns";
import { CSSProperties } from "react";
import TimeLineIcon from "../TimeLineIcon/TimeLineIcon";
import classNames from "classnames";

type Props = {
  date: (Date | string)[];
  title: string;
  company: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  className?: string;
  style?: CSSProperties;
  image: {
    url: string;
    alt: string;
  };
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
  image,
}: Props) {
  return (
    <article
      style={{ backgroundColor: backgroundColor, color: textColor, ...style }}
      className={`job-article rounded-md p-6 pt-5 min-w-[200px] lg:max-w-[400px] shadow-xl ${className}`}
    >
      <TimeLineIcon
        outlineColor={"#fff"}
        image={{
          url: image.url,
          alt: image.alt,
          width: 60,
          height: 60,
        }}
        className={classNames(
          "absolute md:left-[50%] z-[3]",
          "md:ml-[-28px] ml-[8px] left-[5px]"
        )}
      />
      <h3 className="font-semibold text-xl">{title}</h3>
      <h4 className="font-medium text-lg">{company}</h4>
      <p className="font-normal my-2">{description}</p>
      {date.map((date, i) => {
        const dateTime = date instanceof Date;
        return dateTime ? (
          <time
            key={date.getDate() + i}
            dateTime={format(date, "yyy")}
            className="time font-light"
          >
            {format(date, "yyy")}
          </time>
        ) : (
          <span key={date} className="capitalize">
            {date}
          </span>
        );
      })}
    </article>
  );
}

export default TimeLineItem;
