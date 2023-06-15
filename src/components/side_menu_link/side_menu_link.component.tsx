"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SidemenuLinkProps = {
  children: ReactNode;
  stiffness: number;
};

const SideMenuLink = ({ children, stiffness }: SidemenuLinkProps) => {
  return (
    <motion.li
      initial={{ translateX: "-100%" }}
      animate={{ translateX: 0 }}
      transition={{
        type: "spring",
        stiffness: stiffness,
        damping: 20,
      }}
      className="w-full"
    >
      {children}
    </motion.li>
  );
};

export default SideMenuLink;
