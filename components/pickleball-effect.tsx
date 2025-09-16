/**
 * PingPongEffect component
 * A client component that displays text with a ping-pong/pickleball effect on a specific letter
 * within a target word. The letter appears to bounce back and forth like a ping pong ball
 */

"use client";

import React, { useState, useEffect } from "react";

/**
 * Props for the PingPongEffect component
 * @property {string} text - The complete text content to display
 * @property {string} targetWord - The specific word containing the letter to animate
 * @property {string} targetLetter - The letter within the targetWord that should have the ping-pong effect
 * @property {string} [className] - Optional CSS class name for styling the container paragraph
 */
interface PingPongEffectProps {
  text: string;
  targetWord: string;
  targetLetter: string;
  className?: string;
}

/**
 * This renders text with a ping-pong effect applied to a specific letter within a word
 * The animation stops after 5 seconds
 * @param {Object} props - Component props
 * @param {string} props.text - The full text to display
 * @param {string} props.targetWord - The word containing the letter to animate
 * @param {string} props.targetLetter - The letter to apply the ping-pong animation to
 * @param {string} [props.className] - Optional CSS class for styling
 * @returns - The rendered text with a ping-pong effect on the specified letter
 */
export default function PingPongText({
  text,
  targetWord,
  targetLetter,
  className,
}: PingPongEffectProps): React.JSX.Element {
  // State to track whether animation is active
  const [isAnimating, setIsAnimating] = useState(true);

  // Effect to stop animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    // Clean up timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  // If targetWord is not in text, just return the text
  if (!text.includes(targetWord)) {
    return <p className={className}>{text}</p>;
  }

  // Split the text by the targetWord
  const parts = text.split(targetWord);

  // Create an animated version of the target word
  const renderAnimatedWord = () => {
    // Find the position of the target letter in the word
    const letterPos = targetWord.indexOf(targetLetter);

    // If letter not found in word, return the word as is
    if (letterPos === -1) {
      return targetWord;
    }

    return (
      <>
        {targetWord.substring(0, letterPos)}
        <span
          className={isAnimating ? "pingpong-letter" : "pingpong-letter-static"}
        >
          {targetLetter}
        </span>
        {targetWord.substring(letterPos + 1)}
      </>
    );
  };

  return (
    <p className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && renderAnimatedWord()}
        </React.Fragment>
      ))}
      <style jsx global>{`
        @keyframes pingPongBounce {
          0% {
            transform: translateY(0) translateX(0);
            border-radius: 50%;
          }
          25% {
            transform: translateY(-5px) translateX(6px);
          }
          50% {
            transform: translateY(0) translateX(0);
          }
          75% {
            transform: translateY(-5px) translateX(-6px);
          }
          100% {
            transform: translateY(0) translateX(0);
            border-radius: 50%;
          }
        }

        .pingpong-letter {
          display: inline-block;
          position: relative;
          color: red;
          animation: pingPongBounce 1.4s infinite ease-in-out;
          padding: 0 2px;
          font-weight: bold;
          border-radius: 50%;
          transition: color 1.4s ease-out, transform 4.4s ease-out;
        }

        .pingpong-letter-static {
          display: inline-block;
          position: relative;
          //   padding: 0 2px;
          //   font-weight: bold;
          color: inherit;
          border-radius: 50%;
          transition: color 1.4s ease-out, transform 4.4s ease-out;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </p>
  );
}
