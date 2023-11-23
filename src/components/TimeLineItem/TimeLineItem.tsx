import { format } from "date-fns";

type Props = {
  date: [Date, Date];
  title: string;
  company: string;
  description: string;
  backgroundColor: string;
  textColor: string;
};

function TimeLineItem({
  date,
  title,
  company,
  textColor,
  description,
  backgroundColor,
}: Props) {
  return (
    <article
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`job-article rounded-md p-6 pt-5 min-w-[300px] lg:max-w-[400px]`}
    >
      {/* // todo base heading */}
      <h3 className="font-semibold text-xl">{title}</h3>
      <h4 className="font-medium text-lg">{company}</h4>
      <p className="font-normal my-2">{description}</p>
      {date.map((date, index) => {
        return (
          <time
            key={index}
            dateTime={format(date, "yyy")}
            className="time font-light"
          >
            {format(date, "yyy")}
          </time>
        );
      })}
    </article>
  );
}

export default TimeLineItem;
