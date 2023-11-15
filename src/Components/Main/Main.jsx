import React from "react";
import Slider from "../Slider/Slider";
import NavigationButton from "../NavigationButton/NavigationButton";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <div>
      <Slider />
      <NavigationButton />
      <ProductSection />
      <Footer />
    </div>
  );
}
