import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section style={{ padding: "100px 50px", background: "#0d1117", color: "#cbd5e1" }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "50px", fontSize: "3rem", color: "#2dd4bf" }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ textAlign: "center", fontSize: "1.2rem" }}
      >
        <p>Email: <span style={{ color: "#2dd4bf" }}>kalindu@example.com</span></p>
        <p>Phone: <span style={{ color: "#7f5af0" }}>+94 77 123 4567</span></p>
        <p>LinkedIn: <span style={{ color: "#2dd4bf", cursor: "pointer" }}>linkedin.com/in/kalindu</span></p>
      </motion.div>
    </section>
  );
};

export default Contact;
