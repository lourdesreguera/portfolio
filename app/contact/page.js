"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// custom
import Nav from "../components/Nav";

// styles
import styles from "../../styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.container}>
        <div className={styles.container__headings}>
          <h1 className={styles.h1}>¿Hablamos?</h1>
          <h2 className={styles.h2}>Contacta conmigo</h2>
        </div>
        <div className={styles.container__links}>
          <a
            href="mailto:louregbri@gmail.com"
            target="_blank"
            className={styles.mail}
          >
            louregbri@gmail.com
          </a>
          <a href="tel:+34664315224" className={styles.phone}>
            (+34) 664 31 52 24
          </a>
          <p className={styles.address}>Granada, España</p>
          <ul className={styles.ul}>
            <motion.li
              className={styles.li}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="./linkedinIcon.svg"
                alt=""
                width={24}
                height={24}
                className={styles.icon}
              />
              <a href="https:linkedin.com/in/lourdes-reguera" target="_blank">
                Linkedin
              </a>
            </motion.li>
            <span className={styles.span}>|</span>
            <motion.li
              className={styles.li}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.6 }}
            >
              <Image
                src="./githubIcon.svg"
                alt=""
                width={24}
                height={24}
                className={styles.icon}
              />
              <a href="https:github.com/lourdesreguera" target="_blank">
                Github
              </a>
            </motion.li>
          </ul>
        </div>
      </main>
    </>
  );
}
