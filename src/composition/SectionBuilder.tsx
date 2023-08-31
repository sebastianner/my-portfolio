"use client";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  id: string;
};

function SectionBuilder({ children, id }: Props) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto`}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
}

export default SectionBuilder;
