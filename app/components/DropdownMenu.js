import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./use-dimensions";

// custom
import Navigation from "./Navigation";
import { MenuToggle } from "./MenuToogle";

// styles
import styles from "../../styles/nav.module.css";
import stylesDropdown from "../../styles/dropdown.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 50,
    },
  },
};

export default function DropdownMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={!isOpen ? styles.nav : `${styles.nav} ${styles.openNav}`}
    >
      <motion.div className={stylesDropdown.background} variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
