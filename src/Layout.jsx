import { useState } from "react";
import "./styles/Layout.css";
import { Link } from "react-router-dom";

export default function Layout() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="layout-container">
      <div className="logo">
        <h1>Ruta</h1>
      </div>

      <nav className={abierto ? "nav-abierto" : ""}>
        <a href="/" onClick={() => setAbierto(false)}>
          Inicio
        </a>
        <a href="/packs" onClick={() => setAbierto(false)}>
          Paquetes
        </a>
        <a href="/contact" onClick={() => setAbierto(false)}>
          Contacto
        </a>
        <Link to="/contact">
          <button className="btn btn-mobile">Reservar</button>
          <button className="btn btn-desktop">Reservar</button>
        </Link>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setAbierto(!abierto)}
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
