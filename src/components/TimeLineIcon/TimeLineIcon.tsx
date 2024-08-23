import classNames from "classnames";
import Image from "next/image";

type Props = {
  className?: string;
  outlineColor: string;
  image: {
    url: string;
    alt: string;
  };
};

function TimeLineIcon({ image, outlineColor, className }: Props) {
  return (
    <figure
      className={classNames(
        "h-fit w-fit outline rounded-full z-[3]",
        "w-[40px] h-[40px] md:w-[60px] md:h-[60px]",
        className
      )}
      style={{
        outlineColor: outlineColor,
      }}
    >
      <Image
        alt={image.alt}
        className="rounded-full"
        fill
        sizes="(max-width: 767px) 40px, 60px"
        src={image.url}
      />
    </figure>
  );
}

export default TimeLineIcon;
