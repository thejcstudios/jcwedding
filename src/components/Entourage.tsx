import React from "react";
import styles from "../assets/styles/Entourage.module.css";

const Entourage: React.FC = () => {
  return (
    <div className={styles["entourage-container"]}>
      <h1 className={styles["entourage-title"]}>Julian & Christine</h1>

      <img
        src="/images/line3.png"
        alt="Entourage Decoration"
        className={styles["entourage-footerImage"]}
      />

      <h2 className={styles["entourage-subtitle"]}>The Entourage</h2>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Parents of the Groom</h3>
        <p className={styles["entourage-text"]}>Mr. Ronnie Tolentino Sr.</p>
        <p className={styles["entourage-text"]}>
          Mrs. Norwill Ocampo <span className={styles["entourage-deceased"]}>(†)</span>
        </p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Parents of the Bride</h3>
        <p className={styles["entourage-text"]}>Mr. Akira Ohtake</p>
        <p className={styles["entourage-text"]}>Mrs. Mary Grace Talaban</p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Principal Sponsors</h3>
        <ul className={styles["entourage-list"]}>
          <li>Mrs. Ma. Victoria Pelemiano</li>
          <li>Mr. Sonny Pelemiano</li>
          <li>Mrs. Vienna Marie Delos Reyes</li>
          <li>Mr. Ronnel Eugenio</li>
          <li>Mrs. Editha Medina</li>
          <li>Brgy. Capt. Domeng Maniclang</li>
        </ul>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Secondary Sponsors</h3>

        <h4 className={styles["entourage-subheading"]}>Candle</h4>
        <p className={styles["entourage-text"]}>Vince Eriele De Guzman</p>
        <p className={styles["entourage-text"]}>Franz Gabriel De Vera</p>

        <h4 className={styles["entourage-subheading"]}>Veil</h4>
        <p className={styles["entourage-text"]}>Stephanie Joy Gonzales</p>
        <p className={styles["entourage-text"]}>Mark Anthony Alayan</p>

        <h4 className={styles["entourage-subheading"]}>Cord</h4>
        <p className={styles["entourage-text"]}>Ma. Veronica Lopez</p>
        <p className={styles["entourage-text"]}>Renz Santiago</p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Ring Bearer</h3>
        <p className={styles["entourage-text"]}>Ethan Darius Par</p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Coin Bearer</h3>
        <p className={styles["entourage-text"]}>Vynh Roshan Eugenio</p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Bible Bearer</h3>
        <p className={styles["entourage-text"]}>Riven Klein Par</p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Flower Girls</h3>
        <ul className={styles["entourage-list"]}>
          <li>Mariella Jocel Cubian</li>
          <li>Sophia Gonzales</li>
          <li>Scarlet Artemis Argel</li>
        </ul>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Best Man</h3>
        <p className={styles["entourage-text"]}>John Vanic Tolentino</p>
      </section>

      <section className={styles["entourage-section"]}>
        <h3 className={styles["entourage-heading"]}>Maid of Honors</h3>
        <ul className={styles["entourage-list"]}>
          <li>Gracel Ann Cadeliña</li>
          <li>Michaela Marie Tolentino</li>
        </ul>
      </section>
    </div>
  );
};

export default Entourage;
