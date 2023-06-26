"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/about.module.css";
import Nav from "../components/Nav";
import Image from "next/image";
import card1 from "../../public/images/card1.jpg";
const cards = [
  {
    id: 1,
    heading: "Cómo soy",
    bcg: card1,
    text: "Me gusta estar en constante aprendizaje y evolución, razón por la que decidí dar un giro a mi carrera profesional y dedicarme por completo al mundo del desarrollo web. Me siento cómoda trabajando en equipo, me considero una persona organizada y comprometida con mi trabajo.",
  },
  {
    id: 2,
    heading: "Idiomas",
  },
  {
    id: 3,
    heading: "Formación",
  },
  {
    id: 4,
    heading: "Experiencia",
  },
  {
    id: 5,
    heading: "Soft Skills",
  },
  {
    id: 6,
    heading: "Sobre mí",
  },
  {
    id: 7,
    heading: "Hard Skills",
  },
];

export default function About() {
  const [selectedId, setSelectedId] = useState(null);

  console.log(selectedId);
  return (
    <>
      <Nav />
      <h1 className={styles.title}>SBRE MÍ</h1>
      <div className={styles.layoutCards}>
        {cards.map((card) => (
          <motion.div
            className={selectedId === card ? styles.openedCard : styles.card}
            key={card.id}
            whileHover={{ scale: 1.05 }}
            layout
            onClick={() => (selectedId ? null : setSelectedId(card))}
          >
            <p className={styles.card__heading}>{card.heading}</p>
            {selectedId === card && (
              <>
                <div onClick={() => setSelectedId(null)}>
                  <div className={styles["openCard" + card.id]}></div>
                  <p>{card.text}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}
