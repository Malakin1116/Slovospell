import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SpellApp</h1>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          Home
        </a>
        <a href="/practice" className={styles.link}>
          Practice
        </a>
        <a href="/profile" className={styles.link}>
          Profile
        </a>
      </nav>
    </header>
  );
}

export default Header;
