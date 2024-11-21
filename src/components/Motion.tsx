"use client";
import React from "react";
import { Transition, Variants, motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  transition?: Transition;
  variants?: Variants;
  className?: string;
  amount?: number;
  once?: boolean
  direction?: 'right' | 'left' | 'up' | 'down'
}
const Motion: React.FC<Props> = ({ children,
  transition,
  variants,
  once = true,
  direction = 'up',
  className, amount = 0.5, ...restProps }) => {
  const vs = variants ?? { hidden: { opacity: 0, y: direction == 'up' ? 100 : direction == 'down' ? -100 : 0, x: direction == 'left' ? 100 : direction == 'right' ? -100 : 0 }, visible: { opacity: 1, y: 0, x: 0 } }
  return (
    <motion.div
      {...restProps}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={vs}
      transition={{ duration: 0.6, delay: 0.1, ...transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
