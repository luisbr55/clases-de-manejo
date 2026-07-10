import "./styles/Home.css";
import RoadMap from "./RoadMap.jsx";
import Fleet from "./Fleet.jsx";
import Footer from "./Footer.jsx";
import Packs from "./Packs.jsx";
import Layout from "./Layout.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="contenedor-principal">
        <Layout />
      <div className="contenedor-texto">
        <h3>Escuela de manejo · San José</h3>

        <h1>El camino más corto entre vos y tu licencia.</h1>

        <p>
          Clases uno a uno, carros con doble pedal de seguridad e instructores
          certificados por el MOPT. Vos manejás, nosotros nos encargamos de que
          llegues tranquilo al examen.
        </p>
      <Link to="/contact">
        <button className="btn">Reservar mi primera clase</button>
      </Link>
      </div>

      <div className="contenedor-roadmap">
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
      <Fleet />
      <Packs mostrarLayout={false} mostrarFooter={false} mostrarMetodosPago={false} mostrarFAQ={false}/>
      <Footer />
    </div>
  );
}

export default Home;