import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Sevices";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
