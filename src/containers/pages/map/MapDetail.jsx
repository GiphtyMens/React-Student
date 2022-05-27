import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Map.module.css";

const MapDetail = () => {
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  return (
    <div className={styles.mapdetail}>
      <Link to="/main/map">
        <button>Back to map</button>
      </Link>
      <br />
      <br />
      <img src={data.icon} alt="" />
      <br />
      <br />
      <br />
      <h1>{data.title}</h1>
      <br />
      <p>{data.description}</p>
    </div>
  );
};

export default MapDetail;
