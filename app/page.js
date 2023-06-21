"use client";
import Plx from "react-plx";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "/public/images/bg.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ height: "200vh" }}>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 700,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 2.1,
                  property: "scale",
                },
              ],
            },
          ]}
          className={`${styles.prl} ${styles.prl__cover}`}
        >
          <Image className={styles.img} src={bg} alt="foreground" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 800,
              properties: [
                {
                  startValue: "#222222",
                  endValue: "#f4fcfb",
                  property: "backgroundColor",
                },
              ],
            },
          ]}
          className={`${styles.prl} ${styles.prl__bcg}`}
        >
          <div style={{ width: "100vw", height: "100vh" }}></div>
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 1,
                  endValue: 1.5,
                  property: "scale",
                },
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
          className={`${styles.prl} ${styles.prl__headings}`}
        >
          <div
            style={{
              maxWidth: "28.5rem",
              margin: "0 auto",
            }}
          >
            <h1 className={styles.heading}>Lourdes Reguera</h1>
            <h2 className={styles.subheading}>Frontend Developer</h2>
          </div>
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
          ]}
          className={`${styles.prl} ${styles.prl__links}`}
        >
          <Link href="/portfolio">
            <h3 className={styles.portfolio}>Portfolio</h3>
          </Link>
        </Plx>
      </div>
    </main>
  );
}
