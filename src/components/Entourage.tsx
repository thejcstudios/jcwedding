import React from "react";
import styles from "../assets/styles/Entourage.module.css";

const Entourage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Ronnie & Grace</h1>
      <h2>The Entourage</h2>

      <section>
        <h3>Parents of the Groom</h3>
        <p>Mr. Ronnie Tolentino Sr.</p>
        <p>Mrs. Norwill Ocampo <span className={styles.deceased}>(†)</span></p>
      </section>

      <section>
        <h3>Parents of the Bride</h3>
        <p>Mr. Akira Ohtake</p>
        <p>Mrs. Mary Grace Talaban</p>
      </section>

      <section>
        <h3>Principal Sponsors</h3>
        <ul>
          <li>Mrs. Ma. Victoria Pelemiano</li>
          <li>Mr. Sonny Pelemiano</li>
          <li>Mrs. Vienna Marie Delos Reyes</li>
          <li>Mr. Ronnel Eugenio</li>
          <li>Mrs. Editha Medina</li>
          <li>Brgy. Capt. Domeng Maniclang</li>
        </ul>
      </section>

      <section>
        <h3>Secondary Sponsors</h3>

        <h4>Candle</h4>
        <p>Vince Eriele De Guzman</p>
        <p>Franz Gabriel De Vera</p>

        <h4>Veil</h4>
        <p>Stephanie Joy Gonzales</p>
        <p>Mark Anthony Alayan</p>

        <h4>Cord</h4>
        <p>Ma. Veronica Lopez</p>
        <p>Renz Santiago</p>
      </section>

      <section>
        <h3>Ring Bearer</h3>
        <p>Ethan Darius Par</p>
      </section>

      <section>
        <h3>Coin Bearer</h3>
        <p>Vynh Roshan Eugenio</p>
      </section>

      <section>
        <h3>Bible Bearer</h3>
        <p>Riven Klein Par</p>
      </section>

      <section>
        <h3>Flower Girls</h3>
        <ul>
          <li>Mariella Jocel Cubian</li>
          <li>Sophia Gonzales</li>
          <li>Scarlet Artemis Argel</li>
        </ul>
      </section>

      <section>
        <h3>Best Man</h3>
        <p>John Vanic Tolentino</p>
      </section>

      <section>
        <h3>Maid of Honors</h3>
        <ul>
          <li>Gracel Ann Cadeliña</li>
          <li>Michaela Marie Tolentino</li>
        </ul>
      </section>
    </div>
  );
};

export default Entourage;
