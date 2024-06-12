import { GLOBAL_STYLES } from "@/global-styles";
import classNames from "classnames";
import styles from "./Card.module.scss";

type Props = {
  technology: string;
  description: string;
  icon: JSX.Element;
};

function Card({ technology, description, icon }: Props) {
  const cardMovement = (
    card: HTMLElement,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const coordBox = card.getBoundingClientRect();
    const centerPointX = coordBox.x + coordBox.width / 2;
    const centerPointY = coordBox.y + coordBox.height / 2;

    const maxRotation = 20;

    //Y rotation
    const rotationFactorY = maxRotation / (coordBox.width / 2);
    const yRotation = Math.ceil(
      (event.clientX - centerPointX) * rotationFactorY
    );

    //X rotation
    const rotationFactorX = maxRotation / (coordBox.height / 2);
    const xRotation =
      -1 * Math.ceil((event.clientY - centerPointY) * rotationFactorX);

    card.style.cssText = `transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg);`;
  };

  const cardMovementStop = (card: HTMLElement) => {
    card.style.cssText = `transform: rotateY(0deg) rotateX(0deg);`;
  };

  return (
    <article className={classNames(styles.componentCard, "w-full max-w-xs")}>
      <div
        className={classNames(
          "bg-card-green shadow-xl",
          "h-72 auto-rows-auto",
          "place-items-center",
          "grid rounded-2xl"
        )}
        onMouseLeave={(event) => {
          if (event.target instanceof HTMLElement) {
            cardMovementStop(event.target);
          }
        }}
        onMouseMove={(event) => {
          if (event.target instanceof HTMLElement) {
            cardMovement(event.target, event);
          }
        }}
      >
        {icon}
        <h2 className={`${GLOBAL_STYLES.paragraph}`}>{description}</h2>
        <h3 className="text-subtitle tracking-wide font-medium">
          {technology}
        </h3>
      </div>
    </article>
  );
}

export default Card;
