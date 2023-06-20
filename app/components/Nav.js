import Link from "next/link";
import styles from "../../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>
        Løurdes Reguera <span className={styles.span}>6</span>
      </p>
      <ul className={styles.links__container}>
        <li className={styles.link}>
          <Link href='/about'>Sobre mí</Link>
        </li>
        <li className={styles.link}>
          <Link href='/contact'>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
