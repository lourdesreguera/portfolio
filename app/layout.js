import "../styles/globals.css";
import { montserrat, leky } from "./fonts";

export const metadata = {
  title: "Lourdes Reguera Portfolio",
  description: "Portfolio de Lourdes Reguera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leky.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
