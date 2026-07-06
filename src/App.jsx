import "./styles/App.css";
import RoadMap from "./RoadMap.jsx";

function App() {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-texto">
        <h3>Escuela de manejo · San José</h3>

        <h1>El camino más corto entre vos y tu licencia.</h1>

        <p>
          Clases uno a uno, carros con doble pedal de seguridad e instructores
          certificados por el MOPT. Vos manejás, nosotros nos encargamos de que
          llegues tranquilo al examen.
        </p>
        <button className="btn">Reservar mi primera clase</button>
      </div>

      <div className="contenedor-imagen">
        <RoadMap />
      </div>

      <div className="contenedor-final">
        <div className="final-texto">
          <h2>No es solo manejar, es perder el miedo</h2>
          <p>
            La mayoría de nuestros estudiantes nunca han tocado un volante.
            Empezamos en un lote cerrado, sin presión, y solo pasamos a la calle
            cuando de verdad estás listo.
          </p>
          <p>
            El carro con el que practicás es el mismo con el que hacés el
            examen. Nada de sorpresas ese día.
          </p>
        </div>

        <div className="final-visual" aria-hidden="true">
          <span className="final-visual-linea"></span>
        </div>
      </div>
    </div>
  );
}

export default App;