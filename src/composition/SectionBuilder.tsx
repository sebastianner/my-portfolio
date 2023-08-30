"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  id: string;
};

function SectionBuilder({ children, id }: Props) {
  return (
    <motion.section
      //   variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      //   className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
}

export default SectionBuilder;
