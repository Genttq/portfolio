import { useState, useEffect } from "react";

export default function useTypingEffect(
  texts,
  typingDelay = 100,
  erasingDelay = 50,
  pauseDelay = 2000
) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (!isErasing) {
      if (charIdx < current.length) {
        timeout = setTimeout(
          () => setCharIdx((c) => c + 1),
          typingDelay
        );
      } else {
        timeout = setTimeout(() => setIsErasing(true), pauseDelay);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(
          () => setCharIdx((c) => c - 1),
          erasingDelay
        );
      } else {
        setIsErasing(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }

    setDisplayed(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isErasing, index, texts, typingDelay, erasingDelay, pauseDelay]);

  return displayed;
}
