export default function Beneficios() {
  const beneficios = [
    "Preparación sólida para el examen Saber 11.",
    "Conexión real con el entorno universitario.",
    "Herramientas para decisiones vocacionales.",
    "Experiencias deportivas y recreativas.",
    "Una comunidad con tus mismos sueños.",
    "Oportunidad de ganarte una beca completa."
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">¿Qué obtendrás?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {beneficios.map((item, index) => (
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
