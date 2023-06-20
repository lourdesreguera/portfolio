"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import img1 from "../../public/images/1.png";
import img2 from "../../public/images/2.png";
import img3 from "../../public/images/3.png";

import styles from "../../styles/portfolio.module.css";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: img3,
    title: "GRX",
    date: "#2023",
    tech: "Vue",
  },
  {
    id: 2,
    src: img2,
    title: "Slide Ink Studio",
    date: "#2022",
    tech: "React.js",
  },
  {
    id: 3,
    src: img1,
    title: "Korriban",
    date: "#2022",
    tech: "React.js",
  },
];

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageComp(id) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const z = useParallax(scrollYProgress, 50);

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.img__container}>
        <Image
          src={id.id.src}
          alt={id.id.title}
          width={300}
          height={400}
          className={styles.img}
        />
      </div>

      <motion.h2 style={{ y }} className={styles.h2}>
        {id.id.title}
        <span className={styles.date}>{id.id.date}</span>
        <span className={styles.tech}>{id.id.tech}</span>
      </motion.h2>
    </section>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className={styles.sec}>
      {images.map((image) => (
        <ImageComp id={image} key={image.id} />
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
    </section>
  );
}

export default Portfolio;
