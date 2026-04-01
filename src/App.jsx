import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  const t = {
    // backgrounds
    bg:         dark ? "#0f1117" : "#f8f9fc",
    bgAlt:      dark ? "#0b0e14" : "#eef1f7",
    // text
    color:      dark ? "#dde1ee" : "#1a1f2e",
    // cards / inputs
    cardBg:     dark ? "#161b27" : "#ffffff",
    cardBorder: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    inputBg:    dark ? "#161b27" : "#ffffff",
    inputBorder:dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    // footer border
    footerBorder: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
  };

  const cssVars = {
    "--bg":           t.bg,
    "--bg-alt":       t.bgAlt,
    "--color":        t.color,
    "--card-bg":      t.cardBg,
    "--card-border":  t.cardBorder,
    "--input-bg":     t.inputBg,
    "--input-border": t.inputBorder,
    "--footer-border":t.footerBorder,
  };

  return (
    <div
      style={{
        ...cssVars,
        background: "var(--bg)",
        color:      "var(--color)",
        minHeight:  "100vh",
        transition: "background 0.35s, color 0.35s",
      }}
    >
      {/* Inject CSS-variable-driven rules for themed elements */}
      <style>{`
        /* skill cards */
        .skill-card-themed {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
        }
        /* project cards image shadow */
        .project-img-shadow {
          box-shadow: 0 8px 40px rgba(0,0,0,${dark ? "0.4" : "0.12"});
        }
        /* inputs */
        .input-themed {
          background: var(--input-bg) !important;
          border: 1px solid var(--input-border) !important;
          color: var(--color) !important;
        }
        /* footer */
        .footer-themed {
          border-color: var(--footer-border) !important;
        }
        /* alt sections */
        .section-alt {
          background: var(--bg-alt);
        }
        /* project btn code color */
        .btn-code-themed {
          color: var(--color);
          border-color: var(--card-border);
        }
        /* placeholder */
        .input-themed::placeholder { opacity: 0.4; }
      `}</style>

      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />

      <Hero />

      <div className="section-alt">
        <About />
      </div>

      <Skills />

      <div className="section-alt">
        <Projects />
      </div>

      <Contact />

      <div className="footer-themed">
        <Footer />
      </div>
    </div>
  );
}
