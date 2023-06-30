"use client";

// styles
import styles from "../../styles/about.module.css";

// custom
import Nav from "../components/Nav";
import cv from "../components/cvData";
import ParallaxText from "./components/ParallaxText";
import Section from "./components/Section";

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
        <Section>
          <p
            className={`${styles.quote} ${styles.about__quote}`}
          >{`"${aboutMe}"`}</p>
        </Section>
        <Section>
          <h2 className={`${styles.heading} ${styles.heading__education}`}>
            Formación
          </h2>
          <div className={styles.container__items}>
            {education &&
              education.map((item) => {
                const { id, date, name, where } = item;
                return (
                  <div key={id} className={styles.container__item}>
                    <p className={styles.date}>{date}</p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>{name}</p>
                      <p className={styles.place}>{where}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Section>
        <Section>
          <h2 className={`${styles.heading} ${styles.heading__experience}`}>
            Experiencia
          </h2>
          <div className={styles.container__items}>
            {experience &&
              experience.map((item) => {
                const { id, date, name, where, description } = item;
                return (
                  <div key={id} className={styles.container__item}>
                    <p className={styles.date}>{date}</p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>{name}</p>
                      <p>{where}</p>
                      <p className={styles.desc}>{description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Section>
        <Section>
          <div className={styles.container__skills}>
            <div className={styles.container__skill}>
              <h2 className={styles.heading}>Hard Skills</h2>
              <ul className={styles.skills}>
                {skills &&
                  skills.map((skill, i) => {
                    return (
                      <li key={i} className={styles.skill}>
                        {skill}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={styles.container__skill}>
              <div>
                <h2 className={styles.heading}>Soft Skills</h2>
                <ul className={styles.skills}>
                  {softSkills &&
                    softSkills.map((skill, i) => {
                      return (
                        <li key={i} className={styles.skill}>
                          {skill}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div>
                <h2 className={styles.heading}>Idiomas</h2>
                <div className={styles.container__languages}>
                  {languages &&
                    languages.map((item) => {
                      const { id, language, level } = item;
                      return (
                        <div key={id} className={styles.language}>
                          <div className={styles.language__name}>
                            {language}
                          </div>
                          <div className={styles.language__level}>{level}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section position={"last"}>
          <h2
            className={`${styles.heading} ${styles.heading__recommendations}`}
          >
            Dicen sobre mí...
          </h2>
          <div className={styles.container__quote}>
            {recommendations &&
              recommendations.map((item) => {
                const { id, text, name, company, mail } = item;
                return (
                  <>
                    <p key={id} className={styles.quote}>{`"${text}"`}</p>
                    <div className={styles.quote__person}>
                      <p>{name}</p>
                      <p className={styles.p__quote}>{company}</p>
                      <p className={styles.p__quote}>{mail}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </Section>
      </main>
      <ParallaxText baseVelocity={-3}>SBRE MÍ . . .</ParallaxText>
    </>
  );
}
