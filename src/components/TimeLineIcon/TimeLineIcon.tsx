import Image from "next/image";

type Props = {
  className?: string;
  outlineColor: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

function TimeLineIcon({ image, outlineColor, className }: Props) {
  return (
    <figure
      className={`h-fit w-fit outline rounded-full z-[3] ${className}`}
      style={{ outlineColor: outlineColor }}
    >
      <Image
        alt={image.alt}
        className="rounded-full"
        height={image.height}
        layout="responsive"
        sizes="(max-width: 767px) 40px, 60px"
        src={image.url}
        width={image.width}
      />
    </figure>
  );
}

export default TimeLineIcon;
