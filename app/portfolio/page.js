"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

// custom
import img1 from "../../public/images/1.png";
import img2 from "../../public/images/2.png";
import img3 from "../../public/images/3.png";
import Nav from "../components/Nav";

// styles
import styles from "../../styles/portfolio.module.css";
import ImageComp from "./components/ImageComp";

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
    <div className={styles.container}>
      <header>
        <Nav />
      </header>
      <main>
        {images.map((image) => (
          <ImageComp id={image} key={image.id} />
        ))}
        <motion.div className={styles.progress} style={{ scaleX }} />
      </main>
    </div>
  );
}

export default Portfolio;
