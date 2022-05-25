import React from "react";
import HomeNav from "./components/HomeNav";
import Header from "./components/Header";
import Expertise from "./components/Expertise";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div style={{ background: "rgb(27, 27, 27)" }}>
      <HomeNav />
      <Header />
      <Expertise />
      <Testimonial />
    </div>
  );
};

export default Home;
