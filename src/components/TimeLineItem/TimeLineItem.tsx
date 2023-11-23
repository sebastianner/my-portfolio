type Props = {
  date: Date;
  title: string;
  company: string;
  description: string;
  topBarColor?: string;
  backgroundColor: string;
};

function TimeLineItem({ backgroundColor }: Props) {
  return (
    <article className={`h-[300px] w-[300px] bg-[${backgroundColor}]`}>
      Hey
    </article>
  );
}

export default TimeLineItem;
