import { GLOBAL_STYLES } from "@/global-styles";
import classNames from "classnames";
import styles from "./Card.module.scss";
import React, { ForwardedRef, forwardRef } from "react";

type Props = {
  className?: string;
  technology: string;
  description: string;
  icon: JSX.Element;
  dataIndex?: number;
};

const Card = forwardRef(function Card(
  { className, dataIndex, technology, description, icon }: Props,
  ref: ForwardedRef<HTMLElement>
) {
  const cardMovement = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const card = event.target as HTMLElement;
    const coordBox = card.getBoundingClientRect();
    const centerPointX = coordBox.x + coordBox.width / 2;
    const centerPointY = coordBox.y + coordBox.height / 2;

    const maxRotation = 20;

    //Y rotation
    const rotationFactorY = maxRotation / (coordBox.width / 2);
    const rotationY = Math.ceil(
      (event.clientX - centerPointX) * rotationFactorY
    );

    //X rotation
    const rotationFactorX = maxRotation / (coordBox.height / 2);
    const rotationX =
      -1 * Math.ceil((event.clientY - centerPointY) * rotationFactorX);

    card.style.setProperty("--rotationY", `${rotationY}deg`);
    card.style.setProperty("--rotationX", `${rotationX}deg`);
  };

  const cardMovementStop = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const card = event.target as HTMLElement;
    card.style.setProperty("--rotationY", "0");
    card.style.setProperty("--rotationX", "0");
  };

  return (
    <article
      className={classNames(className, styles.componentCard, "w-full max-w-xs")}
      data-index={dataIndex}
      ref={ref}
    >
      <div
        className={classNames(
          "bg-secondary-color shadow-xl",
          "h-72 auto-rows-auto",
          "place-items-center",
          "grid rounded-2xl"
        )}
        onMouseLeave={cardMovementStop}
        onMouseMove={cardMovement}
      >
        {icon}
        <p className={`${GLOBAL_STYLES.paragraph}`}>{description}</p>
        <p className="text-subtitle tracking-wide font-medium">{technology}</p>
      </div>
    </article>
  );
});

export default Card;
