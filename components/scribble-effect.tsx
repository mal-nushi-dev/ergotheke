"use client";

import { useState, useEffect } from "react";

export default function ScribbleEffect({ text }: { text: string }) {
  const [index, setIndex] = useState(0);
  const [hideThumbsUp, setHideThumbsUp] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(
        () => {
          setIndex((prev) => prev + 1);
        },
        100 + Math.random() * 50,
      ); // Slightly randomized speed for a realistic writing feel
      return () => clearTimeout(timeout);
    }
  }, [index, text.length]);

  // Toggle the vertical offset to mimic a hand moving up and down as it writes
  const isEven = index % 2 === 0;
  const isDone = index >= text.length;

  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        setHideThumbsUp(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [isDone]);

  return (
    <span className="inline-flex items-center">
      {text.substring(0, index)}
      <span className="ml-1 grid items-center text-xl">
        <span
          className={`col-start-1 row-start-1 transition-all duration-300 ${
            isDone
              ? "scale-50 opacity-0"
              : `scale-100 opacity-100 ${
                  isEven ? "-translate-y-1" : "translate-y-1"
                } -rotate-340`
          }`}
        >
          ✍🏻
        </span>
        <span
          className={`col-start-1 row-start-1 transition-all duration-2000 ${
            isDone && !hideThumbsUp
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }`}
        >
          👍🏻
        </span>
      </span>
    </span>
  );
}
