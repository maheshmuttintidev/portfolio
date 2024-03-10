import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FramerMotionWrapper = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(!isLoading);
  }, []);

  return (
    <motion.div layout className={isLoading ? "h-0" : "h-full"}>
      {children}
    </motion.div>
  );
};
