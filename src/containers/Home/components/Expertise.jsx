import React from "react";
import styles from "../../styles/Expertise.module.css";
// import { SiJavascript, SiMongodb } from "react-icons/si";
// import { FaReact, FaNodeJs } from "react-icons/fa";
import { stacks, accounting } from "../../data/Data";

const Expertise = () => {
  console.log(stacks);

  return (
    <section className={styles.expertise}>
      <div className={styles.expertise_top}>
        <p>My Skills</p>
        <h1>My Expertise</h1>
      </div>
      <h3>Software Development</h3>
      <div className={styles.mycard_container}>
        {stacks.map((stack, idx) => (
          <div className={styles.mycard} key={idx}>
            <div className={styles.mycard_list}>
              <div className={styles.mycard_icon}>{stack.icon}</div>
              <h3>{stack.title}</h3>
            </div>
            <br />
            <p>{stack.description}</p>
          </div>
        ))}
      </div>
      <h3>Accounting</h3>
      <div className={styles.mycard_container}>
        {accounting.map((acc, idx) => (
          <div className={styles.mycard} key={idx}>
            <div className={styles.mycard_acc}>
            <div className={styles.mycard_icon}>{acc.icon}</div>
              <h3>{acc.title}</h3>
            </div>
            <br />
            <p>{acc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
