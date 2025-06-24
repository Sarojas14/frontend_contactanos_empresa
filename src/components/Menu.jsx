import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./menu.css";

// Cambia la ruta de tu logo según tu proyecto
const logoUrl = "/logomafiest.png"; // Usa tu logo real aquí

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/recursos", label: "Recursos" },
  { to: "/mision", label: "Misión" },
  { to: "/vision", label: "Visión" },
  { to: "/contactanos", label: "Contáctanos" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <nav className="menu-navbar">
      <Link to="/" className="menu-logo" onClick={handleClose}>
        <img src={logoUrl} alt="Logo MaFiEst" />
      </Link>
      <button className="menu-toggle" onClick={handleToggle} aria-label="Menú">
        ☰
      </button>
      <ul className={`menu-list${open ? " open" : ""}`}>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`menu-link${location.pathname === link.to ? " active" : ""}`}
              onClick={handleClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
