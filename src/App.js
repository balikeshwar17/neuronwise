import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Applications from "./sections/Applications";
import Careers from "./sections/Careers";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Applications />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
