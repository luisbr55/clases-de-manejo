import "./styles/Packs.css";

const PAQUETES = [
  {
    nombre: "Exprés",
    clases: "4 clases",
    precio: "₡48.000",
    nota: "Repaso antes del examen",
  },
  {
    nombre: "Completo",
    clases: "12 clases",
    precio: "₡132.000",
    nota: "De cero a examen",
    destacado: true,
  },
  {
    nombre: "A tu ritmo",
    clases: "Clase individual",
    precio: "₡13.500",
    nota: "Sin paquete, pagás por clase",
  },
];

export default function Packs() {
  return (
    <div className="contenedor-paquetes">
      <h2>Paquetes</h2>

      <div className="opciones-paquetes">
        {PAQUETES.map((paquete) => (
          <div
            key={paquete.nombre}
            className={`tarjeta-paquete ${paquete.destacado ? "destacado" : ""}`}
          >
            {paquete.destacado && (
              <span className="badge-destacado">Más elegido</span>
            )}
            <h3>{paquete.nombre}</h3>
            <p className="clases">{paquete.clases}</p>
            <p className="precio">{paquete.precio}</p>
            <p className="nota">{paquete.nota}</p>
          </div>
        ))}
      </div>
    </div>
  );
}