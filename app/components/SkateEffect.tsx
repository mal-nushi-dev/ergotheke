/**
 * What is this component you say??? It is a SkateboardingText component.
 *
 * It is a client component that displays text with a skateboarding effect on a given word.
 * The word appears to skate/swipe into the screen with a dynamic motion.
 */

"use client";

import React from "react";

/**
 * Props for the SkateEffect component
 *
 * @property {string} text - The complete text content to display.
 * @property {string} skateWord - The specific word that should have the skate effect.
 * @property {string} [className] - Optional CSS class name for styling the container paragraph
 */
interface SkateEffectProps {
  text: string;
  skateWord: string;
  className?: string;
}

/**
 * This renders the text with a skate effect applied to a chosen word.
 *
 * @param {Object} props - Component props.
 * @param {string} props.text - The full text to display.
 * @param {string} props.skateWord - The word within the text that should skate in.
 * @param {string} [props.className] - Optional CSS class for styling.
 * @returns - The rendered text with a skate effect
 */
export default function SkateText({
  text,
  skateWord,
  className,
}: SkateEffectProps): React.JSX.Element {
  // If skateWord is not in text, just return the text
  if (!text.includes(skateWord)) {
    return <p className={className}>{text}</p>;
  }

  // Split the text by the skateWord to create parts
  const parts = text.split(skateWord);

  return (
    <p className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="skateboard-effect">{skateWord}</span>
          )}
        </React.Fragment>
      ))}
      <style jsx>{`
        .skateboard-effect {
          display: inline-block;
          position: relative;
          animation: skateIn 1.5s ease-out;
        }
        @keyframes skateIn {
          0% {
            transform: translateX(-150px) rotate(10deg) skewX(20deg);
            opacity: 0;
          }
          60% {
            transform: translateX(15px) rotate(-5deg) skewX(-10deg);
            opacity: 1;
          }
          75% {
            transform: translateX(-8px) rotate(2deg) skewX(5deg);
          }
          90% {
            transform: translateX(4px) rotate(-1deg) skewX(-2deg);
          }
          100% {
            transform: translateX(0) rotate(0) skewX(0);
          }
        }
      `}</style>
    </p>
  );
}
