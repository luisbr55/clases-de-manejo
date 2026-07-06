import "./styles/App.css";
import "./styles/RoadMap.css";

const RUTA = [
  { km: "KM 0", titulo: "Teórico", texto: "Manual de tránsito, señalización y simulacro del examen escrito del COSEVI." },
  { km: "KM 8", titulo: "Maniobras básicas", texto: "Arranque, frenado, parqueo paralelo. Todo dentro de un lote cerrado, sin tráfico." },
  { km: "KM 20", titulo: "Manejo en ciudad", texto: "Tráfico real: rotondas, semáforos, autopista y hora pico." },
  { km: "KM 35", titulo: "Examen", texto: "Te acompañamos el día de la prueba, en nuestro carro y con doble pedal." },
];

const WIDTH = 900;
const ROAD_Y = 150;

const POINTS = [
  { x: 90, y: ROAD_Y },
  { x: 300, y: ROAD_Y - 30 },
  { x: 520, y: ROAD_Y + 25 },
  { x: 740, y: ROAD_Y - 15 },
];

const PATH = `M 20 ${ROAD_Y + 10}
  C 150 ${ROAD_Y - 20}, 220 ${ROAD_Y - 60}, 300 ${ROAD_Y - 30}
  S 460 ${ROAD_Y + 55}, 520 ${ROAD_Y + 25}
  S 680 ${ROAD_Y - 45}, 740 ${ROAD_Y - 15}
  S 850 ${ROAD_Y + 15}, ${WIDTH - 40} ${ROAD_Y}`;

export default function RoadMap() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} 240`}
      className="roadmap-svg"
      role="img"
      aria-label="Ruta de aprendizaje, de la clase teórica al examen"
    >
      <path d={PATH} className="roadmap-road" />
      <path d={PATH} className="roadmap-lane-line" />

      {RUTA.map((paso, idx) => {
        const p = POINTS[idx];
        return (
          <g key={paso.km} className="roadmap-point">
            <line x1={p.x} y1={p.y} x2={p.x} y2={p.y - 55} className="roadmap-stem" />
            <rect x={p.x - 58} y={p.y - 100} width="116" height="46" rx="4" className="roadmap-sign" />
            <text x={p.x} y={p.y - 80} textAnchor="middle" className="roadmap-km">
              {paso.km}
            </text>
            <text x={p.x} y={p.y - 64} textAnchor="middle" className="roadmap-title">
              {paso.titulo.toUpperCase()}
            </text>
            <circle cx={p.x} cy={p.y} r="5" className="roadmap-marker" />
            <foreignObject x={p.x - 90} y={p.y + 14} width="180" height="90" className="roadmap-tooltip-wrap">
              <div className="roadmap-tooltip">{paso.texto}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}