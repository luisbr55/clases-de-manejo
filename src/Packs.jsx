import { useState } from "react";
import Layout from "./Layout";
import "./styles/Packs.css";
import "./styles/Layout.css";
import Footer from "./Footer";
import "@tabler/icons-webfont/dist/tabler-icons.css";

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

const METODOS_PAGO = [
  { nombre: "Sinpe móvil", nota: "Pago inmediato", icono: "ti-device-mobile" },
  { nombre: "Transferencia", nota: "Todos los bancos", icono: "ti-building-bank" },
  { nombre: "Efectivo", nota: "El día de la clase", icono: "ti-cash" },
  { nombre: "Pago fraccionado", nota: "Consultá condiciones", icono: "ti-calendar-repeat" },
];

const FAQ = [
  {
    pregunta: "¿Qué pasa si falto a una clase?",
    respuesta: "Podés reprogramarla sin ningún costo adicional, solo tenés que contactarnos.",
  },
  {
    pregunta: "¿Recogen en cualquier parte de las zonas de cobertura?",
    respuesta:
      "Sí, recogemos en San José, Escazú, Santa Ana, Guácima y Alajuela sin costo adicional. Fuera de estas zonas, consultanos por WhatsApp para confirmar disponibilidad.",
  },
  {
    pregunta: "¿Hay clases los domingos?",
    respuesta:
      "Nuestro horario regular es de lunes a sábado, pero las clases de domingo se pueden coordinar según disponibilidad. Escribinos para confirmar.",
  },
  {
    pregunta: "¿Cómo funciona el pago fraccionado?",
    respuesta: "Se paga la mitad al comenzar el curso y el resto a la mitad del mismo.",
  },
];

export default function Packs({
  mostrarLayout = true,
  mostrarMetodosPago = true,
  mostrarFAQ = true,
  mostrarFooter = true,
}) {
  const [abierta, setAbierta] = useState(null);

  const toggleFAQ = (index) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <div className="contenedor-principal" id="paquetes">
      {mostrarLayout && <Layout />}
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

        {mostrarMetodosPago && (
          <div className="metodos-pago">
            <h3>Métodos de pago</h3>
            <div className="opciones-pago">
              {METODOS_PAGO.map((metodo) => (
                <div key={metodo.nombre} className="tarjeta-pago">
                  <i className={`ti ${metodo.icono}`} aria-hidden="true"></i>
                  <p className="nombre-pago">{metodo.nombre}</p>
                  <p className="nota-pago">{metodo.nota}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {mostrarFAQ && (
          <div className="faq-paquetes">
            <h3>Preguntas frecuentes</h3>
            <div className="lista-faq">
              {FAQ.map((item, index) => (
                <div key={item.pregunta} className="item-faq">
                  <button
                    className="pregunta-faq"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={abierta === index}
                  >
                    <span>{item.pregunta}</span>
                    <span className={`icono-faq ${abierta === index ? "abierto" : ""}`}>
                      +
                    </span>
                  </button>
                  {abierta === index && (
                    <p className="respuesta-faq">{item.respuesta}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {mostrarFooter && <Footer />}
    </div>
  );
}