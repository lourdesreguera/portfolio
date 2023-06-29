"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import styles from "../../styles/about.module.css";
import Nav from "../components/Nav";
import { wrap } from "@motionone/utils";
import cv from "../components/cvData";
import { useInView } from "react-intersection-observer";

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

const divVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={styles.container}
      ref={ref}
      variants={divVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const {
    aboutMe,
    education,
    experience,
    skills,
    softSkills,
    languages,
    recommendations,
  } = cv;

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Box>
          <p
            className={`${styles.quote} ${styles.about__quote}`}
          >{`"${aboutMe}"`}</p>
        </Box>
        <Box>
          <h2 className={`${styles.heading} ${styles.heading__education}`}>
            Formación
          </h2>
          <div className={styles.container__items}>
            {education &&
              education.map((item, i) => {
                return (
                  <div key={i} className={styles.container__item}>
                    <p className={styles.date}>{item.date}</p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>{item.name}</p>
                      <p className={styles.place}>{item.where}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Box>
        <Box>
          <h2 className={`${styles.heading} ${styles.heading__experience}`}>
            Experiencia
          </h2>
          <div className={styles.container__items}>
            {experience &&
              experience.map((item, i) => {
                return (
                  <div key={i} className={styles.container__item}>
                    <p className={styles.date}>{item.date}</p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>{item.name}</p>
                      <p>{item.where}</p>
                      <p className={styles.desc}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Box>
        <Box>
          <div className={styles.container__skills}>
            <div className={styles.container__skill}>
              <h2 className={styles.heading}>Hard Skills</h2>
              <ul className={styles.skills}>
                {skills &&
                  skills.map((skill, i) => {
                    return <li key={i} className={styles.skill}>{skill}</li>;
                  })}
              </ul>
            </div>
            <div className={styles.container__skill}>
              <div>
                <h2 className={styles.heading}>Soft Skills</h2>
                <ul className={styles.skills}>
                  {softSkills &&
                    softSkills.map((skill, i) => {
                      return <li key={i} className={styles.skill}>{skill}</li>;
                    })}
                </ul>
              </div>
              <div>
                  <h2 className={styles.heading}>Idiomas</h2>
                  <div className={styles.container__languages}>
                    {languages &&
                      languages.map((item, i) => {
                        return (
                          <div key={i} className={styles.language}>
                            <div className={styles.language__name}>{item.language}</div>
                            <div className={styles.language__level}>{item.level}</div>
                          </div>
                        );
                      })}
                  </div>
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <h2
            className={`${styles.heading} ${styles.heading__recommendations}`}
          >
            Dicen sobre mí...
          </h2>
          <div>
            {recommendations &&
              recommendations.map((item, i) => {
                return (
                  <>
                    <p key={i} className={styles.quote}>{`"${item.text}"`}</p>
                    <div className={styles.quote__person}>
                      <p>{item.name}</p>
                      <p className={styles.p__quote}>{item.company}</p>
                      <p className={styles.p__quote}>{item.mail}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </Box>
        <div>-----------</div>
        {/* <motion.div
          ref={ref}
          className={styles.container}
          initial="hidden"
          animate={control}
          variants={divVariant}
        >
          <h2 className={`${styles.heading} ${styles.heading__about}`}>
            Sobre mí
          </h2>
          <p className={styles.quote}>{`"${aboutMe}"`}</p>
        </motion.div> */}
        {/* <motion.div className={styles.container}>
          <h2 className={`${styles.heading} ${styles.heading__education}`}>
            Formación
          </h2>
          <div className={styles.container__items}>
            {education &&
              education.map((item, i) => {
                return (
                  <div key={i} className={styles.container__item}>
                    <p className={styles.date}>{item.date}</p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>{item.name}</p>
                      <p>{item.where}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </motion.div> */}
        {/* <motion.div className={styles.container}>
          <h2 className={`${styles.heading} ${styles.heading__experience}`}>
            Experiencia
          </h2>
          <div className={styles.container__items}>
            {experience &&
              experience.map((item, i) => {
                return (
                  <div key={i} className={styles.container__item}>
                    <p className={styles.date}>{item.date}</p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>{item.name}</p>
                      <p>{item.where}</p>
                      <p className={styles.desc}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </motion.div> */}
        {/* <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div>
            <h2>Hard Skills</h2>
            <ul>
              {skills &&
                skills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
            </ul>
          </div>
          <div>
            <h2>Soft Skills</h2>
            <ul>
              {softSkills &&
                softSkills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
            </ul>
          </div>
        </motion.div> */}
        {/* <div className={styles.container}>
          <h2
            className={`${styles.heading} ${styles.heading__recommendations}`}
          >
            Dicen sobre mí...
          </h2>
          {recommendations &&
            recommendations.map((item, i) => {
              return (
                <>
                  <p key={i} className={styles.quote}>{`"${item.text}"`}</p>
                  <div className={styles.quote__person}>
                    <p>{item.name}</p>
                    <p className={styles.p__quote}>{item.company}</p>
                    <p>{item.mail}</p>
                  </div>
                </>
              );
            })}
        </div> */}
      </main>
      <ParallaxText baseVelocity={-3}>SBRE MÍ . . .</ParallaxText>
    </>
  );
}
