import classNames from "classnames";
import Image from "next/image";
import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Card.module.scss";
import { GLOBAL_STYLES } from "@/global-styles";
type Props = {
  className?: string;
  dataIndex?: number;
  description: string;
  icon: string;
  technology: string;
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

    // X rotation
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
      className={classNames(
        className,
        styles.componentCard,
        "w-full lg:w-[531px] h-24 bg-transparent"
      )}
      data-index={dataIndex}
      ref={ref}
    >
      <div
        className={classNames(
          "h-full shadow-xl",
          "place-items-center",
          "rounded-2xl",
          "flex justify-center",
          styles.cardStyles
        )}
        onMouseLeave={cardMovementStop}
        onMouseMove={cardMovement}
      >
        <Image
          alt={technology}
          className="mr-7"
          height={20}
          src={icon}
          width={20}
        />
        <p
          className={classNames(
            styles.cardDescription,
            GLOBAL_STYLES.paragraph
          )}
        >
          {description}
        </p>
        <span className="mx-1 mr-6 sm:mr-1">|</span>
        <p className="text-subtitle tracking-wide font-medium">{technology}</p>
      </div>
    </article>
  );
});

export default Card;
