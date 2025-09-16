/**
 * What is this component you say??? It is a TypingEffect component.
 *
 * It displays a typing animation for a given word, character by character.
 * Check the homepage to see it in action: `$whoami`
 */

"use client";
import { useEffect, useState } from "react";

/**
 * TypingEffect component
 * Displays a typing animation for the given text, character by character,
 * with a blinking cursor at the end while typing.
 *
 * @param text - The string to animate as typing.
 */
export default function TypingEffect({ text }: { text: string }) {
  // State to hold the currently "typed" portion of the text
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 120);
    // Cleanup interval on unmount or text change
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-green-600 dark:text-green-400 font-mono">
      {typed}
      {typed.length < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}
