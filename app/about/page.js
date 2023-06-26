"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import styles from "../../styles/about.module.css";
import Nav from "../components/Nav";
import Image from "next/image";
import card1 from "../../public/images/card1.jpg";
import { wrap } from "@motionone/utils";

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
    text: [
      {
        name: "Bootcamp FullStack Developer",
        date: "jul 2022 / sept 2022",
        where: "Upgrade Hub",
      },
      {
        name: "Responsive Web Design",
        date: "abr 2022",
        where: "FreeCodeCamp",
      },
      {
        name: "Curso Desarrollo y Diseño Web",
        date: "mar 2022",
        where: "SuperHi",
      },
      {
        name: "Máster en Marketing, Publicidad y Diseño",
        date: "nov 2015 / jun 2016",
        where: "Nett Formación",
      },
      {
        name: "Grado en Administración y Dirección de Empresas",
        date: "sept 2011 / jun 2015",
        where: "Universidad de Sevilla",
      },
    ],
  },
  {
    id: 4,
    heading: "Experiencia",
    text: [
      {
        name: "Frontend Developer",
        date: "oct 2022 / actualidad",
        where: "TSE Technology (Remoto)",
        description:
          "Desarrollo frontend con ReactJS y Material UI, Diseño UX/UI con Figma. Metodología SCRUM.",
      },
      {
        name: "Administrativo Atención al Usuario",
        date: "mar 2020 / dic 2021",
        where: "Hospital San Rafael (Granada)",
        description:
          "Colaboración. Comunicación. Flexibilidad. Capacidad de trabajo en equipo. Tolerancia a la presión. Empatía.",
      },
      {
        name: "Responsable de Administración",
        date: "oct 2017 / dic 2019",
        where: "Clínica Generalife (Granada)",
        description:
          "Gestión del tiempo. Capacidad de trabajo en equipo. Responsabilidad. Habilidades interpersonales. Resolución de conflictos. Liderazgo.",
      },
      {
        name: "Emprendedora",
        date: "abr 2016 / oct 2018",
        where: "LouB",
        description:
          "Diseño de prendas. Creación de tienda online. Toma de decisiones. Innovación. Iniciativa. Resolución.",
      },
      {
        name: "Hostess y Community Manager",
        date: "dic 2016 / sept 2017",
        where: "Basarri Gin Club (Madrid)",
        description:
          "Creatividad. Habilidades comunicativas. Atención al detalle. Actitud positiva.",
      },
    ],
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

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function About() {
  // const [selectedId, setSelectedId] = useState(null);

  // console.log(selectedId);
  return (
    <>
      <Nav />
      <ParallaxText baseVelocity={-3}>{cards[0].heading}</ParallaxText>
      <p>{cards[0].text}</p>
      <ParallaxText baseVelocity={3}>{cards[2].heading}</ParallaxText>
      {cards[2].text &&
        cards[2].text.map((card) => {
          return (
            <div key={card.name}>
              <p>{card.name}</p>
              <p>{card.date}</p>
              <p>{card.place}</p>
            </div>
          );
        })}
        <ParallaxText baseVelocity={-3}>{cards[3].heading}</ParallaxText>
      {cards[3].text &&
        cards[3].text.map((card) => {
          return (
            <div key={card.name}>
              <p>{card.name}</p>
              <p>{card.date}</p>
              <p>{card.place}</p>
              <p>{card.description}</p>
            </div>
          );
        })}
      {/* <h1 className={styles.title}>SBRE MÍ</h1>
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
      </div> */}
    </>
  );
}
