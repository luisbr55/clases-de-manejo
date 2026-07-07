import { useState } from "react";
import "./styles/Contact.css";
import "./styles/Layout.css";
import "./styles/Footer.css";
import Layout from "./Layout";
import Footer from "./Footer";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá conectás tu backend, servicio de email (ej. Formspree, EmailJS) o API propia.
    console.log("Formulario enviado:", form);
    setEnviado(true);
    setForm({ nombre: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="contenedor-principal" id="contacto">
      <Layout />
      <div className="contenedor-contacto">
        <h2>Contacto</h2>

        <div className="grid-contacto">
          <div className="info-contacto">
            <div className="info-item">
              <span className="info-label">Dirección</span>
              <p>San José, Costa Rica</p>
            </div>
            <div className="info-item">
              <span className="info-label">Horario</span>
              <p>Lunes a sábado, 6am – 7pm</p>
            </div>
            <div className="info-item">
              <span className="info-label">Teléfono</span>
              <p>+506 6128-5380</p>
            </div>
            <div className="info-item">
              <span className="info-label">Correo</span>
              <p>hola@ruta.cr</p>
            </div>
            <div className="info-item">
              <span className="info-label">Zonas de cobertura</span>
              <p>San José, Escazú, Santa Ana, Guacima, Alajuela</p>
            </div>
            <div className="info-item">
              <span className="info-label">Instructor</span>
              <p>Carlos Badilla</p>
            </div>
            <div className="info-item">
              <span className="info-label">Tiempo de respuesta</span>
              <p>Te contactamos en menos de 24 horas</p>
            </div>

            <a
              href="https://wa.me/50600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 5.01L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.8c2.14 0 4.15.83 5.66 2.35a7.95 7.95 0 0 1 2.34 5.65c0 4.41-3.59 8-8.01 8h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a7.93 7.93 0 0 1-1.25-4.28c0-4.42 3.6-8 8.01-8zm-4.4 4.62c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.65 4.16 3.62 2.05.82 2.47.65 2.92.61.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47z"
                />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

          <form className="formulario-contacto" onSubmit={handleSubmit}>
            <label>
              <span>Nombre</span>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Teléfono</span>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn">
              Enviar mensaje
            </button>

            {enviado && (
              <p className="mensaje-confirmacion" role="status">
                ¡Listo! Te contactamos pronto.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
