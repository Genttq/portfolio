import { useState } from "react";
import RevealSection from "./RevealSection";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <RevealSection>
          <p className={styles.label}>Get In Touch</p>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.sub}>
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </RevealSection>

        <RevealSection>
          <div className={styles.emailButtonContainer}>
            <a
              href="mailto:gentrit5.qorri@gmail.com"
              className={`${styles.submitBtn} ${styles.emailButton}`}
            >
              Contact me by Email
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
