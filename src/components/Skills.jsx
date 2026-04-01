import skillsData from "../data/skills";
import RevealSection from "./RevealSection";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <RevealSection>
          <p className={styles.label}>What I Know</p>
          <h2 className={styles.title}>Skills</h2>
        </RevealSection>

        <div className={styles.grid}>
          {skillsData.map(({ category, tags }) => (
            <RevealSection key={category}>
              <div className={`${styles.card} skill-card-themed`}>
                <p className={styles.catTitle}>{category}</p>
                <div className={styles.tagsWrap}>
                  {tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
