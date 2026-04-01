import { useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["about", "skills", "projects", "contact"];

export default function Navbar({ dark, onToggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${dark ? styles.navDark : styles.navLight}`}>
      <span className={styles.logo}>GQ.</span>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map((s) => (
          <li key={s} onClick={() => scrollTo(s)} className={styles.link}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <button
          onClick={() => onToggleDark()}
          className={`${styles.darkBtn} ${dark ? styles.darkBtnActive : ""}`}
        >
          {dark ? "☀ Light" : "☽ Dark"}
        </button>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
