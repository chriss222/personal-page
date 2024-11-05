import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({ children, delay = 0, duration = 1, className = "" }) => {
  return (
    <motion.div className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration, delay }}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
