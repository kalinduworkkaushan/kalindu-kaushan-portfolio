import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#0d1117" }}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
