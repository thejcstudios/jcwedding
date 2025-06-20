import { useState } from 'react';
import '../assets/styles/Prenup.css';
import useScrollEffect from '../hooks/useScrollReveal'; // Import your custom hook

const imageUrls = [
  '/images/1.webp',
  '/images/2.webp',
  '/images/3.webp',
  '/images/5.webp',
  '/images/6.webp',
  '/images/7.webp',
  '/images/8.webp',
  '/images/9.webp',
  '/images/10.webp',
  '/images/11.webp',
  '/images/12.webp',
  '/images/13.webp',
  '/images/14.webp',
  '/images/15.webp',
  '/images/16.webp',
];

export default function Prenup() {
  const [index, setIndex] = useState(0);

  // Apply the scroll effect to the header text elements\
  const titleRef = useScrollEffect<HTMLHeadingElement>(0.1, true); // For the h1
  const paragraphRef = useScrollEffect<HTMLParagraphElement>(0.1, true); // For the paragraph

  return (
    <div className="wrapper">
      <div className="prenup">
        {/* You can apply the ref to the whole header for a combined effect,
            or individually to h1 and p for more staggered control.
            Let's do individual for more control as you requested "all text". */}
        <header className="prenup-header">
          <h1 ref={titleRef}>The Prelude to Us</h1>
          <p ref={paragraphRef}>
            Before we say "I do," we're excited to share some of our favorite moments from our pre-nuptial photoshoot. These photos capture the joy, laughter, and deep connection we share as we eagerly anticipate our big day. We hope you enjoy this glimpse into our journey to forever.
          </p>
        </header>

        <div
          className="hero"
          style={{ backgroundImage: `url(${imageUrls[index]})` }}
        ></div>

        <nav>
          {imageUrls.map((url, i) => (
            <button key={i} onClick={() => setIndex(i)}>
              <img
                src={url}
                className={index === i ? 'active' : ''}
                alt={`Thumbnail ${i + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}