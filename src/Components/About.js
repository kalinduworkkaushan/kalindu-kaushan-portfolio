import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section style={{ padding: "100px 50px", background: "#0d1117", color: "#cbd5e1" }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "50px", fontSize: "3rem", color: "#2dd4bf" }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", lineHeight: "1.6rem", textAlign: "center" }}
      >
        I’m a frontend developer passionate about building interactive web experiences.
        I specialize in React and Python.
      </motion.p>
    </section>
  );
};

export default About;
