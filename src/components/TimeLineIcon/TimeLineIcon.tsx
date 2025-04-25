import classNames from "classnames";
import Image from "next/image";

type Props = {
  className?: string;
  image: {
    alt: string;
    url: string;
  };
};

function TimeLineIcon({ image, className }: Props) {
  return (
    <figure
      className={classNames(
        "outline outline-2 outline-secondary-green rounded-full z-3",
        "w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]",
        className
      )}
    >
      <Image
        fill
        alt={image.alt}
        className="rounded-full"
        sizes="(max-width: 768px) 60px, 60px"
        src={image.url}
      />
    </figure>
  );
}

export default TimeLineIcon;
