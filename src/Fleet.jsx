import "./styles/Fleet.css";
import { Car, Settings, Award } from "lucide-react";

const flota = [
  {
    id: "automatico",
    nombre: "Automático",
    descripcion: "Ideal para tu primera clase",
    precio: 12000,
    icono: Car,
  },
  {
    id: "manual",
    nombre: "Manual",
    descripcion: "Incluye práctica de cambios y clutch",
    precio: 13500,
    icono: Settings,
  },
  {
    id: "examen",
    nombre: "Carro de examen",
    descripcion: "El mismo que usás el día de la prueba",
    precio: 15000,
    icono: Award,
  },
];

export default function Fleet() {
  return (
    <div className="contenedor-flota">
      <h2>Flota de carros</h2>

      <div className="opciones-flota">
        {flota.map((carro) => {
          const Icono = carro.icono;
          return (
            <div className="tarjeta-carro" key={carro.id}>
              <Icono size={48} strokeWidth={1.5} />
              <h3>{carro.nombre}</h3>
              <p>{carro.descripcion}</p>
              <p className="precio">
                ₡{carro.precio.toLocaleString("es-CR")}/h
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}