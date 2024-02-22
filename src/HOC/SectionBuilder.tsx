"use client";
import { ComponentType } from "react";

export default function SectionBuilder(Component: ComponentType, id: string) {
  const BuildSection = () => {
    return (
      <section className="w-full flex justify-center">
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component />
      </section>
    );
  };
  return BuildSection;
}
