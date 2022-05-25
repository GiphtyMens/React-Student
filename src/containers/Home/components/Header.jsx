import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_text}>
        <div className={styles.header_text1}>
          <h1>Hey, I'm a</h1>
          <h1>Software Developer</h1>
        </div>
        <div className={styles.header_text2}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis aperiam error reiciendis ab hic ea iusto ipsam,
            consectetur deleniti harum delectus labore. Sunt aut repellat
            laborum debitis ipsum esse.
          </p>
          <div className={styles.header_input}>
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
            <p>🎉 Join my newsletter and get free strategy</p>
          </div>
        </div>
      </div>
      <div className={styles.header_img}>
          <h3></h3>
      </div>
    </header>
  );
};

export default Header;
