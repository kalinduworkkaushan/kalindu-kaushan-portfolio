import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myimage.jpg"; // your personal photo

const Hero = () => {
  const stars = Array.from({ length: 80 });

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "radial-gradient(circle at top, #0d1117, #07090f)",
        overflow: "hidden",
        position: "relative",
        padding: "0 50px",
      }}
    >
      {/* Floating Stars */}
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100 + "%";
        const left = Math.random() * 100 + "%";
        const delay = Math.random() * 5;
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top,
              left,
              width: size,
              height: size,
              borderRadius: "50%",
              background: "white",
              opacity: 0.7,
              boxShadow: "0 0 5px white",
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, delay }}
          />
        );
      })}

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        style={{ maxWidth: "500px", zIndex: 10 }}
      >
        <h1
          style={{
            fontSize: "4rem",
            background: "linear-gradient(90deg, #7f5af0, #2dd4bf, #ff61dc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "900",
            marginBottom: "20px",
            textShadow:
              "0 0 20px rgba(125,90,240,0.7), 0 0 25px rgba(45,212,191,0.5)",
          }}
        >
          Hi, I'm Kalindu
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#cbd5e1", lineHeight: "1.6rem" }}>
          Frontend Developer | React Enthusiast. I craft futuristic web experiences that are alive, aesthetic, and modern.
        </p>
        <motion.a
          whileHover={{
            scale: 1.1,
            backgroundColor: "#2dd4bf",
            boxShadow: "0 0 30px #2dd4bf",
          }}
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            borderRadius: "50px",
            background: "#7f5af0",
            color: "#fff",
            fontWeight: "bold",
            display: "inline-block",
            textDecoration: "none",
          }}
          href="#projects"
        >
          Explore Projects
        </motion.a>
      </motion.div>

      {/* Your Photo */}
      <motion.div
        style={{ position: "relative", width: "300px", zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={myPhoto}
          alt="Kalindu"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "4px solid #2dd4bf",
            boxShadow: "0 0 30px #2dd4bf",
            position: "relative",
          }}
          animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
