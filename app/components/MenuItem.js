import { motion } from "framer-motion";
import styles from "../../styles/dropdown.module.css";
import Link from "next/link";
import Image from "next/image";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      className={styles.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.href} className={styles.li__container} aria-label={`Ir a la página ${i.title}`}>
        <p>{i.title}</p>
        <Image
          src="./blackArrow.svg"
          alt=""
          width={24}
          height={24}
          className={styles.arrow}
        />
      </Link>
    </motion.li>
  );
};
