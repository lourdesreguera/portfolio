import { motion } from "framer-motion";

// custom
import { MenuItem } from "./MenuItem";
import { links } from "./links";

// styles
import styles from "../../styles/dropdown.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Navigation({ isOpen }) {
  return (
    <motion.ul
      variants={variants}
      className={isOpen ? styles.ul : styles.hiddenUl}
    >
      {links && links.map((i) => <MenuItem i={i} key={i.id} />)}
    </motion.ul>
  );
}
