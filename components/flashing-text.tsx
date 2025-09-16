/**
 * What is this component you say??? It is a FlashingText component.
 *
 * It is a client component that displays text with a camera flash effect on a given word.
 * Check the photography page to see it in action, baby!
 */

"use client";

import React from "react";

/**
 * Props for the FlashingText component.
 * @property {string} text - The complete text content to display
 * @property {string} flashWord - The specific word that should have the flash effect
 * @property {string} [className] - Optional CSS class name for styling the container paragraph
 */
interface FlashingTextProps {
  text: string;
  flashWord: string;
  className?: string;
}

/**
 * This renders the text with a camera flash effect applied to a chosen word.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - The full text to display
 * @param {string} props.flashWord - The word within the text that should flash
 * @param {string} [props.className] - Optional CSS class for styling
 * @returns - The rendered text with flash effect
 */
export default function FlashingText({
  text,
  flashWord,
  className,
}: FlashingTextProps): React.JSX.Element {
  // If flashWord is not in text, just return the text
  if (!text.includes(flashWord)) {
    return <p className={className}>{text}</p>;
  }

  // Split the text by the flashWord to create parts
  const parts = text.split(flashWord);

  return (
    <p className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="camera-flash">{flashWord}</span>
          )}
        </React.Fragment>
      ))}
      <style jsx>{`
        .camera-flash {
          position: relative;
          animation: cameraFlash 3s infinite;
        }
        @keyframes cameraFlash {
          0%,
          100% {
            color: inherit;
          }
          5% {
            color: white;
            text-shadow: 0 0 8px white, 0 0 15px white;
          }
          10% {
            color: inherit;
            text-shadow: none;
          }
        }
      `}</style>
    </p>
  );
}
