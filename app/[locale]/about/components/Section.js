import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// styles
import styles from "../../../../styles/about.module.css";

const divVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Section({ position, children }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={position === "last" ? styles.lastContainer : styles.container}
      ref={ref}
      variants={divVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}
