import useTypingEffect from "../hooks/useTypingEffect";
import styles from "./Hero.module.css";

const TYPED_TEXTS = [
  "the Developer you need.",
  "passionate about coding.",
  "always learning new tech.",
];

export default function Hero() {
  const typedText = useTypingEffect(TYPED_TEXTS);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.accentTop} />
      <div className={styles.accentBottom} />
      <div className={styles.content}>
        <p className={styles.greeting}>👋 Hello, World!</p>
        <h1 className={styles.title}>
          Hi, my name is{" "}
          <span className={styles.name}>Gentrit Qorri</span>
          <br />
          I'm <span className={styles.typed}>{typedText}</span>
          <span className={styles.cursor} />
        </h1>
        <p className={styles.sub}>
          Software Engineer passionate about building efficient, scalable,
          and user-friendly software solutions.
        </p>
        <button className={styles.ctaBtn} onClick={scrollToAbout}>
          Know more ↓
        </button>
      </div>
    </section>
  );
}
