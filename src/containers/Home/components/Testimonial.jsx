import React from "react";
import styles from "../../styles/Testimonial.module.css";

const Testimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Craft Amazing</h3>
        <h1>Customer Testimonials</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.card_list}>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            perspiciatis ad commodi eveniet reiciendis odio voluptas quia,
            temporibus consectetur.
          </p>
          <h3>John Doe</h3>
          <h4>Bomark Royal Ltd</h4>
        </div>
        <div className={styles.card_list}>
         <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            perspiciatis ad commodi eveniet reiciendis odio voluptas quia,
            temporibus consectetur.
          </p>
          <h3>John Doe</h3>
          <h4>Bomark Royal Ltd</h4>
        </div>
        <div className={styles.card_list}>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            perspiciatis ad commodi eveniet reiciendis odio voluptas quia,
            temporibus consectetur.
          </p>
          <h3>John Doe</h3>
          <h4>Bomark Royal Ltd</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
