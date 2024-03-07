import React, { useEffect } from "react";
import { motion } from "framer-motion";
//Components
import ScrollBtn from "../../helpers/ScrollBtn";
import AboutAlamat from "./AboutAlamat";
import AboutProdukLayanan from "./AboutProdukLayanan";
import AboutUs from "./AboutUs";
import AboutKeunggulan from "./AboutKeunggulan";
import AboutKostumer from "./AboutKostumer";

const About = () => {
  useEffect(() => {
    document.title = "About Mitrakom";
  }, []);
  return (
    <motion.main
      className="about"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <AboutUs />
      <AboutKeunggulan />
      <AboutKostumer />
      <AboutProdukLayanan />
      <AboutAlamat />
      <ScrollBtn />
    </motion.main>
  );
}

export default About;