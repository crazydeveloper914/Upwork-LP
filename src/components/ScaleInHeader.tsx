"use client";
import React from "react";
import { Transition, Variants, motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  transition?: Transition;
  className?: string;
  amount?: number;
  once?: boolean
}
const ScaleInHeader: React.FC<Props> = ({ children,
  transition,
  once = true,
  className, amount = 0.5, ...restProps }) => {
    const variants: Variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          ease: [0.215, 0.61, 0.355, 1],
        },
      },
    }; 
     return (
    <motion.h1
      {...restProps}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration: 0.6, delay: 0.1, ...transition }}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

export default ScaleInHeader;
