"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealHeadingProps = {
  text: string;
  as?: ElementType;
  className?: string;
};

/**
 * Heading whose letters fade in one after another when it scrolls into view.
 * The Figma file captured these headings mid-animation (letters at decreasing
 * opacity), so the full text is rendered and animated here.
 */
export function RevealHeading({ text, as: Tag = "h2", className }: RevealHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let index = 0;
  const words = text.split(" ");

  return (
    <Tag ref={ref} aria-label={text} className={`${className ?? ""} ${revealed ? "is-revealed" : ""}`}>
      {words.map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, c) => (
            <span key={c} className="reveal-char" style={{ transitionDelay: `${index++ * 25}ms` }}>
              {char}
            </span>
          ))}
          {w < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
