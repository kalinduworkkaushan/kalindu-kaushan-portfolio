import React from "react";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "rgba(13,17,23,0.8)",
    backdropFilter: "blur(10px)",
    color: "#cbd5e1",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  };

  const linkStyle = {
    margin: "0 15px",
    cursor: "pointer",
    fontWeight: 500,
    position: "relative",
    transition: "all 0.3s",
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "22px", color: "#2dd4bf" }}>
        Kalindu Kaushan
      </div>
      <div>
        {["Home", "About", "Projects", "Contact"].map((link, i) => (
          <span
            key={i}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#7f5af0")}
            onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
          >
            {link}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
