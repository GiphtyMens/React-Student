import React from "react";
import styles from "../../styles/Home.module.css";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {MdPhotoCameraBack} from "react-icons/md"

const HomeNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_img}>
        <MdPhotoCameraBack />
      </div>
      <div className={styles.nav_menu}>
        <ul>
          <li>About</li>
          <li>Works</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.nav_icons}>
        <FaWhatsapp />
        <FaInstagram />
        <FaTwitter />
        <FaFacebookF />
      </div>
    </nav>
  );
};

export default HomeNav;
