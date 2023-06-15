"user client";

import { motion } from "framer-motion";

const LoadingSession = () => {
  return (
    <div className="mt-4 flex flex-col items-center gap-4 justify-center">
      <motion.div
        style={{
          backgroundColor: "#26b3c4",
          borderRadius: "100%",
          width: 100,
          height: 100,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: "100%" }}
        transition={{ ease: "linear", duration: 1, repeat: Infinity }}
      ></motion.div>
      <h1>Loading Session</h1>
    </div>
  );
};

export default LoadingSession;
