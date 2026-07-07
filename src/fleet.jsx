import "./styles/Fleet.css";

export default function Fleet() {
  return (
    <div className="contenedor-flota">
      <h2>Flota de carros</h2>

      <div className="opciones-flota">
        <div>
          <h3>Automatico</h3>
          <p>Ideal para tu primera clase</p>
          <p className="precio">₡12.000/h</p>
        </div>
        <div>
          <h3>Manual</h3>
          <p>Incluye práctica de cambios y clutch</p>
          <p className="precio">₡13.500/h</p>
        </div>
        <div>
          <h3>Carro de examen</h3>
          <p>El mismo que usás el día de la prueba</p>
          <p className="precio">₡15.000/h</p>
        </div>
      </div>
    </div>
  );
}
