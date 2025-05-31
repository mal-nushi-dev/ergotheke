/**
 * A LegoWordBuilder component.
 * 
 * It's a client component that animates a word by breaking it apart and rebuilding it like LEGO blocks.
 * Perfect for LEGO-themed pages to add a playful visual effect.
 */

"use client"

import React, { useState, useEffect } from 'react';

/**
 * Props for the LegoWordBuilder component.
 * @property {string} word - The word to animate like LEGO blocks
 * @property {number} [interval] - Controls full animation cycle time in ms (default: 5000ms)
 * @property {number} [buildTime] - Controls how long each transition takes in ms (default: 1000ms)
 * @property {string[]} [colors] - LEGO-like colors for letters
 * @property {string} [className] - Optional CSS class name for styling
 */
interface LegoWordBuilderProps {
  word: string;
  interval?: number;
  buildTime?: number;
  colors?: string[];
  className?: string;
}

/**
 * This renders a word that animates by breaking apart and rebuilding like LEGO blocks.
 * The animation cycle goes: built -> unbuilding -> unbuilt -> building -> built
 * 
 * @param {Object} props - Component props
 * @param {string} props.word - The word to animate
 * @param {number} props.interval - Full animation cycle duration
 * @param {number} props.buildTime - Transition duration
 * @param {string[]} props.colors - LEGO brick colors for letters
 * @param {string} props.className - Optional CSS class for styling
 * @returns - The rendered animated word
 */
export default function LegoWordBuilder({
  word,
  interval = 5000,
  buildTime = 1000,
  colors = ['#D01012', '#0D69AB', '#00852B', '#F8BB3D', '#F06D98'],
  className = ''
}: LegoWordBuilderProps): React.JSX.Element {
  // Animation states: built (assembled), unbuilding (breaking apart),
  // unbuilt (fully apart), building (coming back together)
  const [buildState, setBuildState] = useState<'built' | 'unbuilding' | 'unbuilt' | 'building'>('built');
  
  useEffect(() => {
    // Animation cycle: built -> unbuilding -> unbuilt -> building -> built
    const cycle = () => {
      setBuildState('unbuilding');
      
      setTimeout(() => {
        setBuildState('unbuilt');
        
        setTimeout(() => {
          setBuildState('building');
          
          setTimeout(() => {
            setBuildState('built');
          }, buildTime);
        }, 800); // Pause in unbuilt state
      }, buildTime);
    };
    
    const timer = setInterval(cycle, interval);
    return () => clearInterval(timer);
  }, [interval, buildTime]);

  return (
    <span className={`inline-flex items-center align-baseline ${className}`}>
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className={`lego-letter letter-${index}`}
          data-state={buildState}
          style={{
            color: colors[index % colors.length],
          }}
        >
          {letter}
        </span>
      ))}
      <style jsx>{`
        .lego-letter {
          position: relative;
          font-weight: bold;
          margin: 0 1px;
          display: inline-block;
          transition: all ${buildTime * 0.7}ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        
        .lego-letter[data-state="built"] {
          transform: translateY(0) rotate(0);
          opacity: 1;
        }
        
        .lego-letter[data-state="unbuilding"] {
          opacity: 0.8;
        }
        
        .lego-letter[data-state="unbuilt"] {
          opacity: 0.6;
        }
        
        .lego-letter[data-state="building"] {
          opacity: 0.9;
        }
        
        ${Array.from({ length: word.length }).map((_, i) => `
          .letter-${i}[data-state="unbuilding"] {
            transform: translateY(${(i % 2 === 0 ? -15 : 15)}px) rotate(${(i % 2 === 0 ? -20 : 20)}deg);
          }
          .letter-${i}[data-state="unbuilt"] {
            transform: translateY(${(i % 2 === 0 ? -25 : 25)}px) rotate(${(i % 2 === 0 ? -40 : 40)}deg);
          }
          .letter-${i}[data-state="building"] {
            transform: translateY(${(i % 2 === 0 ? -5 : 5)}px) rotate(${(i % 2 === 0 ? -5 : 5)}deg);
          }
        `).join('')}
      `}</style>
    </span>
  );
}
