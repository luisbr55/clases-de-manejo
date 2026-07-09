import { useState } from "react";
import "./styles/Layout.css";

export default function Layout() {
  const [abierto, setAbierto] = useState(false);


  return (
    <header className="layout-container">
      <div className="logo">
        <h1>Ruta</h1>
      </div>

      <nav className={abierto ? "nav-abierto" : ""}>
        <a href="/" onClick={() => setAbierto(false)}>La ruta</a>
        <a href="/" onClick={() => setAbierto(false)}>Flota</a>
        <a href="/packs" onClick={() => setAbierto(false)}>Paquetes</a>
        <a href="/contact" onClick={ () => setAbierto(false)}>Contacto</a>
        <button className="btn btn-mobile">Reservar</button>
      </nav>

      <button className="btn btn-desktop">Reservar</button>

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