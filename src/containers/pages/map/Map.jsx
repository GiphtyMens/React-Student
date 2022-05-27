import React from "react";
import styles from "./Map.module.css";
import { info } from "./Data";
import MapCard from "./MapCard";

const Map = () => {
  //   console.log(info);
  return (
    <div className={styles.map_container}>
      {info.map((item, idx) => (
        <MapCard item={item} key={idx} />
      ))}
    </div>
  );
};

export default Map;
