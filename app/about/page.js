"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
const cards = [1, 2, 3, 4];
import styles from "../../styles/about.module.css";
import Nav from "../components/Nav";

export default function About() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Nav />
      <div className={styles.layoutCards}>
        {cards.map((card, i) => (
          <motion.div
            className={selectedId === card ? styles.openedCard : styles.card}
            key={i}
            layout
            onClick={() => (selectedId ? null : setSelectedId(card))}
          >
            {selectedId === card && (
              <>
                <div onClick={() => setSelectedId(null)} />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}
