import { useEffect, useState } from "react"
import logo from "../assets/logoff.png"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = ["home", "gft", "jatimana", "metadata"]

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      let currentSection = "home"

      for (let id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* LOGO */}
        <div style={logoBox}>
          <img src={logo} alt="Rainforest Conservancy" style={logoStyle} />
        </div>

        {/* NAV */}
        <nav style={navStyle}>
          <NavLink href="#home" isActive={activeSection === "home"}>Home</NavLink>
          <NavLink href="#gft" isActive={activeSection === "gft"}>GFT Info</NavLink>
          <NavLink href="#jatimana" isActive={activeSection === "jatimana"}>Jatimanã Lake</NavLink>
          <NavLink href="#metadata" isActive={activeSection === "metadata"}>On-Chain</NavLink>
          <a href="#support" style={buttonStyle}>Support the Forest</a>
        </nav>
      </div>
    </header>
  )
}

/* ================= NAV LINK COMPONENT ================= */
const NavLink = ({ href, children, isActive }) => (
  <a
    href={href}
    style={{
      ...linkStyle,
      color: isActive ? "#14532d" : "#1F7A4D",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {children}
    {/* UNDERLINE */}
    <span style={{
      position: "absolute",
      bottom: "-4px",
      left: 0,
      width: isActive ? "100%" : "0%",
      height: "2px",
      backgroundColor: "#14532d",
      transition: "width 0.3s ease"
    }} />
    {/* HOVER EFFECT */}
    <span style={{
      position: "absolute",
      bottom: "-4px",
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "#10b981",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.3s ease",
      pointerEvents: "none"
    }}
      className="hover-underline"
    />
    <style>{`
      a:hover .hover-underline {
        transform: scaleX(1);
      }
    `}</style>
  </a>
)

/* ================= STYLES ================= */
const headerStyle = {
  width: "100%",
  backgroundColor: "#FFFFFF",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
}

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box"
}

const logoBox = {
  display: "flex",
  alignItems: "center",
  flexShrink: 0
}

const logoStyle = {
  height: "42px",
  width: "auto",
  display: "block"
}

const navStyle = {
  display: "flex",
  alignItems: "center",
  gap: "28px",
  flexWrap: "nowrap"
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "0.95rem",
  whiteSpace: "nowrap",
  transition: "color 0.3s ease"
}

const buttonStyle = {
  padding: "10px 24px",
  backgroundColor: "#1F7A4D",
  color: "#FFFFFF",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "0.95rem",
  whiteSpace: "nowrap",
  boxShadow: "0 6px 18px rgba(31,122,77,0.25)",
  transition: "transform 0.2s ease",
}
