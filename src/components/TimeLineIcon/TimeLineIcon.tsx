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
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="rounded-full"
        layout="responsive"
        sizes="(max-width: 767px) 40px, 60px"
      />
    </figure>
  );
}

export default TimeLineIcon;
