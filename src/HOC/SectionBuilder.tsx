"use client";
import { ComponentType } from "react";

export default function SectionBuilder<P extends object>(
  Component: ComponentType<P>,
  id: string,
) {
  const BuildSection = (props: P) => {
    return (
      <section className="w-screen h-max flex justify-center">
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component {...props} />
      </section>
    );
  };

  return BuildSection;
}
