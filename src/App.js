import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Tours from "./components/Tours";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import data from "./tours_data";
import MyCarousel from "./components/MyCarousel";

// import Contact from "./component/Contact";
function App() {
  const [tours, setTours] = useState(data);

  // remove tour function, we need to add it as a prop to the Tours render
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <>
      <Navbar />
      <MyCarousel />
      {/* <Hero /> */}
      <About />
      <Services />
      <Tours tours={tours} removeTour={removeTour} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
