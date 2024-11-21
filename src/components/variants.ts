import { Variants } from "framer-motion";

export const scaleInVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };