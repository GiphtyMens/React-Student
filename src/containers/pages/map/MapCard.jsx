import React, { useState } from "react";
import styles from "./Map.module.css";
import { Link } from "react-router-dom";

const MapCard = ({ item }) => {
  //   const [state, setState] = useState(item);
  // console.log(state);
  return (
    <Link to={`/main/${item.id}`} state={item}>
      <div className={styles.map_card}>
        <img src={item.icon} alt="" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button>Read more</button>
      </div>
    </Link>
  );
};

export default MapCard;
