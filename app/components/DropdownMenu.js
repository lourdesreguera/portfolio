import { motion, useCycle } from "framer-motion";
import { useRef, useState } from "react";
import { useDimensions } from "./use-dimensions";
import Navigation from "./Navigation";
import { MenuToggle } from "./MenuToogle";
import styles from '../../styles/nav.module.css'
import stylesDropdown from '../../styles/dropdown.module.css'


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 280px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 280px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
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
      className={styles.nav}
    >
      <motion.div className={stylesDropdown.background} variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}