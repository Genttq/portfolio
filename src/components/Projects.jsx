import { useState } from "react";
import projectsData from "../data/projects";
import RevealSection from "./RevealSection";
import styles from "./Projects.module.css";

export default function Projects() {
  const [hoveredImg, setHoveredImg] = useState(null);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <RevealSection>
          <p className={styles.label}>What I've Built</p>
          <h2 className={styles.title}>Projects</h2>
        </RevealSection>

        <div className={styles.list}>
          {projectsData.map((project, i) => (
            <RevealSection key={project.title}>
              <div className={styles.row}>
                {/* LEFT — text */}
                <div className={styles.textCol}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.techWrap}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.btns}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.btnLive}
                    >
                      ▶ See Live
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.btnCode} btn-code-themed`}
                    >
                      ⟨/⟩ Source Code
                    </a>
                  </div>
                </div>

                {/* RIGHT — image */}
                <div
                  className={styles.imgCol}
                  onMouseEnter={() => setHoveredImg(i)}
                  onMouseLeave={() => setHoveredImg(null)}
                >
                  <div
                    className={`${styles.imgWrap} project-img-shadow`}
                    style={{
                      transform: hoveredImg === i ? "scale(1.02) rotate(-1deg)" : "scale(1) rotate(0deg)",
                      transition: "transform 0.4s ease",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.img}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className={styles.imgFallback}>
                      <span>📁</span>
                      <p>{project.title}</p>
                    </div>
                    <div className={styles.imgOverlay}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.overlayBtn}
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
