import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "React Portfolio",
    desc: "Aesthetic portfolio with futuristic animations and glowing effects.",
    tech: ["React", "Framer Motion", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce App",
    desc: "Modern fullstack app with smooth UI, cart, payment, and auth.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section style={{ padding: "100px 50px", background: "#0d1117" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "3rem",
          color: "#2dd4bf",
        }}
      >
        My Projects
      </h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            style={{
              background: "rgba(25,25,25,0.95)",
              padding: "25px",
              borderRadius: "20px",
              margin: "20px",
              width: "320px",
              boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
              cursor: "pointer",
              perspective: "1000px",
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              boxShadow: "0 25px 40px rgba(45,212,191,0.4)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#2dd4bf" }}>
              {p.title}
            </h3>
            <p style={{ fontSize: "1rem", color: "#cbd5e1" }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}>
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    margin: "5px 5px 0 0",
                    padding: "5px 12px",
                    background: "rgba(45,212,191,0.2)",
                    color: "#2dd4bf",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
                fontSize: "1.2rem",
              }}
            >
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2dd4bf" }}
              >
                <FaGithub />
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7f5af0" }}
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
