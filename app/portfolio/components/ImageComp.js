"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// styles
import styles from ".././../../styles/portfolio.module.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ImageComp(id) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.img__container}>
        <Image
          src={id.id.src}
          alt={id.id.title}
          width={300}
          height={400}
          className={styles.img}
          priority={true}
        />
      </div>
      <motion.div style={{ y }} className={styles.headings__container}>
        <h2 className={styles.h2}>{id.id.title}</h2>
        <div className={styles.link__container}>
          <p className={styles.date}>{id.id.date}</p>
          <motion.a
            href={id.id.href}
            className={styles.link}
            target="_blank"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="./arrow.svg" alt="" width={24} height={24} />
          </motion.a>
        </div>
        <p className={styles.tech}>{id.id.tech}</p>
      </motion.div>
    </section>
  );
}
