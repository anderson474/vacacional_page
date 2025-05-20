export default function Incluye() {
  const items = [
    "Formación académica especializada durante dos semanas.",
    "2 simulacros tipo ICFES para evaluar y mejorar tu desempeño.",
    "Inmersión universitaria en la Universidad de Medellín.",
    "Actividades recreativas y deportivas.",
    "Test de orientación vocacional.",
    "Acompañamiento de docentes expertos en Saber 11.",
    "20% de descuento en pregrados de la U. de Medellín.",
    "¡Beca del 100% para el mejor puntaje ICFES!"
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Esta experiencia incluye:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-yellow-500 font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
