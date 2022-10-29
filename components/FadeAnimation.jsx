import React from "react";
import { motion } from "framer-motion";

const FadeAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        x: { duration: 0.7 },
        default: { ease: "linear" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
