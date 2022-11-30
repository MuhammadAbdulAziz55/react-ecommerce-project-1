import React from "react";
import Announcement from "../components/Announcement";
import Category from "../components/Category";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Category />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
