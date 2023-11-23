import Image from "next/image";

type Props = {
  outlineColor: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

function TimeLineIcon({ image, outlineColor }: Props) {
  return (
    <figure
      className={`h-fit w-fit outline rounded-full`}
      style={{ outlineColor: outlineColor }}
    >
      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="rounded-full"
      />
    </figure>
  );
}

export default TimeLineIcon;
