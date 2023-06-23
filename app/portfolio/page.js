"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import img1 from "../../public/images/1.png";
import img2 from "../../public/images/2.png";
import img3 from "../../public/images/3.png";

import styles from "../../styles/portfolio.module.css";
import Nav from "../components/Nav";
import { useEffect } from "react";

const images = [
  {
    id: 1,
    src: img1,
    title: "Kørriban",
    date: "#2022",
    tech: "React.js",
    href: "https://korriban.es",
  },
  {
    id: 2,
    src: img2,
    title: "Slide Ink Studiø",
    date: "#2022",
    tech: "React.js",
    href: "https://slide-ink-studio-react.vercel.app/",
  },
  {
    id: 3,
    src: img3,
    title: "GRX",
    date: "#2023",
    tech: "Vue",
    href: "https://grx-metal.vercel.app/",
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

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.sec}>
        {images.map((image) => (
          <ImageComp id={image} key={image.id} />
        ))}
        <motion.div className={styles.progress} style={{ scaleX }} />
      </main>
    </>
  );
}

export default Portfolio;
