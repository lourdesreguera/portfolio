"use client";

import Plx from "react-plx";
import Image from "next/image";

// styles
import stylesHome from "../styles/page.module.css";

//custom
import bg from "/public/images/bg.png";
import NavHome from "./components/NavHome";

export default function Home() {
  return (
    <main className={stylesHome.main}>
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
          className={`${stylesHome.prl} ${stylesHome.prl__cover}`}
        >
          <Image className={stylesHome.img} src={bg} alt="foreground" />
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
          className={`${stylesHome.prl} ${stylesHome.prl__bcg}`}
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
          className={`${stylesHome.prl} ${stylesHome.prl__headings}`}
        >
          <div
            style={{
              maxWidth: "28.5rem",
              margin: "0 auto",
            }}
          >
            <h1 className={stylesHome.heading}>Lourdes Reguera</h1>
            <h2 className={stylesHome.subheading}>Frontend Developer</h2>
          </div>
        </Plx>
        <NavHome />
      </div>
    </main>
  );
}
