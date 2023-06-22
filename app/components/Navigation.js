import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "../../styles/dropdown.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const items = [
  {
    id: 1,
    name: "Sobre mí",
    href: "/about",
  },
  {
    id: 2,
    name: "Contacto",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <motion.ul variants={variants} className={styles.ul}>
      {items.map((i) => (
        <MenuItem i={i} key={i.id} />
      ))}
    </motion.ul>
  );
}
