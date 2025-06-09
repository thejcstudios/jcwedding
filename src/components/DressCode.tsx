import React from "react";
import styles from '../assets/styles/DressCode.module.css'

const DressCode: React.FC = () => {
  const singleImage = "/images/line2.png";

  const gridImages = [
    "/images/suit1.png",
    "/images/suit2.png",
    "/images/suit3.png",
    "/images/dress1.png",
    "/images/dress2.png",
    "/images/dress3.png",
    
  ];

  const circleColors = ["#A52A2A", "#FF7F50", "#E9967A", "#B22222", "#CD5C5C"];

  return (
    <div className={styles.container}>
      <h1>Wedding Details</h1>
      <img 
        src={singleImage} 
        alt="Main" 
        className={styles.mainImage} 
        loading="lazy" 
      />
      <p>
        Guests are to wear their most comfortable semi formal attire of
        EARTH TONE colors.
        kindly see shades above as reference
      </p>

      <div className={styles.grid}>
        {gridImages.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt={`Grid ${idx + 1}`} 
            loading="lazy" 
          />
        ))}
      </div>

      <div className={styles.circles}>
        {circleColors.map((color, idx) => (
          <span
            key={idx}
            className={styles.circle}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default DressCode;
