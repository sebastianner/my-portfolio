"use client";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { ComponentType } from "react";

function SectionBuilder(Component: ComponentType, id: string) {
  const BuildSection = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full flex justify-center pt-10"
      >
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
  return BuildSection;
}

export default SectionBuilder;
