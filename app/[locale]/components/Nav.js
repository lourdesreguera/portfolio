// custom
import DropdownMenu from "./DropdownMenu";

// styles
import styles from "../../../styles/nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header className={styles.header}>
      <DropdownMenu />
      <div className={styles.title}>
        <Link href="/" className={styles.link} >
          Løurdes Reguera <span className={styles.span}>6</span>
        </Link>
      </div>
    </header>
  );
}
