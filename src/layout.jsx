import "./styles/layout.css";

export default function Layout() {
  return (
    <header className="layout-container">
      <div className="logo">
        <h1>Ruta</h1>
      </div>
      <nav>
        <a href="#ruta">La ruta</a>
        <a href="#flota">Flota</a>
        <a href="#paquetes">Paquetes</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="btn">Reservar</button>
    </header>
  );
}
