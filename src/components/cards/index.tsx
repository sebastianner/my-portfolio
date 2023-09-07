import React from "react";

type Props = { n: number };

function Card({ n }: Props) {
  return (
    <div className="w-full max-w-xs h-72 bg-[#162e21] rounded-2xl">{n}</div>
  );
}

export default Card;
