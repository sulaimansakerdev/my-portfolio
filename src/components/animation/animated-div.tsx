"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedDivProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ className, children, ...props }) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
