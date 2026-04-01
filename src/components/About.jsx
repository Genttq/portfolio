import RevealSection from "./RevealSection";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <RevealSection>
          <p className={styles.label}>About</p>
          <h2 className={styles.title}>About Me</h2>
        </RevealSection>

        <RevealSection>
          <div className={styles.grid}>
            <div className={styles.imgWrap}>
              <img
                src="/assets/profile.jpeg"
                alt="Gentrit Qorri"
                className={styles.img}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className={styles.imgFallback}>🧑‍💻</div>
            </div>

            <div className={styles.info}>
              <p className={styles.text}>
                Hi, I am Gentrit Qorri — a Software Engineer and graduate from
                AAB University. I got my Bachelor's in May 2022 and am planning
                to complete my Master's degree too.
              </p>
              <p className={styles.text}>
                My academic journey has equipped me with a strong foundation in
                software development, problem-solving, and cutting-edge
                technologies. I am passionate about designing and building
                efficient, scalable, and user-friendly software solutions. I
                thrive in dynamic environments where I can apply my technical
                skills to solve real-world challenges and contribute to
                impactful projects.
              </p>
              <a
                href="/assets/Resume Gentrit Qorri.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.resumeBtn}
              >
                View Resume →
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
