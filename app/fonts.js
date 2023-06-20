import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const leky = localFont({
  src: "./fonts/LekyCalgriaPersonalUse-ywJRd.ttf",
  variable: "--font-leky",
});
