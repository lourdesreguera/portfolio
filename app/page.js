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
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1000,
          }}
        >
          <Image style={{ width: "100%" }} src={bg} alt="foreground" />
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
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100vh",
          }}
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
          style={{
            position: "fixed",
            left: 0,
            top: "calc(50% - 96px)",
            width: "100%",
            height: "100vh",
            color: "#fff",
          }}
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
          style={{
            position: "fixed",
            left: 0,
            top: "calc(50% - 22px)",
            width: "100%",
            height: "100vh",
            zIndex: "3000",
          }}
        >
          <Link href="/about"><h3 className={styles.portfolio}>Portfolio</h3></Link>
        </Plx>
        {/* <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div> */}
      </div>
      
    </main>
  );
}
