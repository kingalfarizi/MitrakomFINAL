import React, { useEffect } from "react";
import Header from "./Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import WelcomeSection from "./WelcomeSection";
import LayananKami from "./LayananKami";
import BerbagaiProdukElektronik from "./BerbagaiProdukElektronik";
import JasaService from "./JasaService";
import StatsPreview from "./StatsPreview";
import BlogPreview from "./BlogPreview";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./ContactLanding";

const RootSection = () => {
  useEffect(() => {
    document.title = "Mitrakom";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <WelcomeSection />
      <LayananKami />
      <StatsPreview />
      <ScrollButton />
      <BerbagaiProdukElektronik />
      <JasaService />
      <BlogPreview />
      <ContactLanding />
    </React.Fragment>
  );
}

export default RootSection;
