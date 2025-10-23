"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({ className, children, ...props }) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
