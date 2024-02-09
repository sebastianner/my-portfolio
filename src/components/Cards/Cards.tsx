import { GLOBAL_STYLES } from "@/global-styles";
import classNames from "classnames";

GLOBAL_STYLES;

type Props = {
  technology: string;
  description: string;
  icon: JSX.Element;
};

function Card({ technology, description, icon }: Props) {
  return (
    <article
      className={classNames(
        "w-full max-w-xs h-72  auto-rows-auto",
        "auto-cols-auto place-items-center shadow-xl",
        "bg-card-green rounded-2xl grid"
      )}
    >
      {icon}
      <h2 className={`${GLOBAL_STYLES.paragraph}`}>{description}</h2>
      <h3 className="text-subtitle tracking-wide font-medium">{technology}</h3>
    </article>
  );
}

export default Card;
