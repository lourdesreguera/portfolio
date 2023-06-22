import Link from "next/link";
import styles from "../../styles/nav.module.css";
import DropdownMenu from "./DropdownMenu";

export default function Nav() {
  return (
    <header className={styles.header}>
      <p className={styles.title}>
        Løurdes Reguera <span className={styles.span}>6</span>
      </p>
      <DropdownMenu />
    </header>
  );
}
