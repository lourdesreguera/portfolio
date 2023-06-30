"use client";

import Plx from "react-plx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// styles
import stylesHome from "../../styles/page.module.css";
import stylesNav from "../../styles/dropdown.module.css";

// custom
import { links } from "./links";

export default function NavHome() {
  const [isVisible, setIsVisible] = useState(false);

  return (
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
      className={`${stylesHome.prl} ${stylesHome.prl__links} ${
        isVisible ? stylesHome.visible : ""
      }`}
      onPlxEnd={() => setIsVisible(true)}
    >
      <ul className={stylesHome.links}>
        {links &&
          links.map((i) => {
            return (
              <motion.li
                className={stylesNav.li}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={i.id}
              >
                <Link href={i.href} className={stylesNav.li__container}>
                  <p>{i.title}</p>
                  <Image
                    src="./blackArrow.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={stylesNav.arrow}
                  />
                </Link>
              </motion.li>
            );
          })}
      </ul>
    </Plx>
  );
}
