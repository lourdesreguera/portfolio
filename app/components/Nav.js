// custom
import DropdownMenu from "./DropdownMenu";

// styles
import styles from "../../styles/nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <DropdownMenu />
      <p className={styles.title}>
        Løurdes Reguera <span className={styles.span}>6</span>
      </p>
    </header>
  );
}
