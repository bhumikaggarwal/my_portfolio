import HomeComp from "../components/HomeComp";
import Contact from "../components/Contact";
import Qualification from "../components/Qualification";
import Skills from "../components/Skills";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";
import Projects from "../components/Projects";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function Main() {
  const { theme } = useContext(AppContext);
  return (
    <HelmetProvider>
      <Helmet>
        <body className={theme} />
      </Helmet>
      <div className="change">
        <NavbarComp />
        <HomeComp />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        <FooterComp />
      </div>
    </HelmetProvider>
  );
}

export default Main;
