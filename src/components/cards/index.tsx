import { GLOBAL_STYLES } from "@/global-styles";

GLOBAL_STYLES;

type Props = {
  technology: string;
  description: string;
  icon: JSX.Element;
};

function Card({ technology, description, icon }: Props) {
  return (
    <article className="w-full max-w-xs h-72 bg-card-green rounded-2xl grid auto-rows-auto auto-cols-auto place-items-center shadow-xl">
      {icon}
      <h2 className={`${GLOBAL_STYLES.paragraph}`}>{description}</h2>
      <h3 className="text-subtitle font-extralight tracking-wide">
        <b>{technology}</b>
      </h3>
    </article>
  );
}

export default Card;
