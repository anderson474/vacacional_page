"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const benefits = [
  { icon: "📘", text: "2 semanas de formación académica" },
  { icon: "📝", text: "Simulacros tipo ICFES 11° y material de estudio" },
  { icon: "🏓", text: "Actividades recreativas y deportivas" },
  { icon: "🎓", text: "Inmersión a la vida universitaria" },
  { icon: "👨‍🏫", text: "Test de orientación vocacional"},
];

export default function Benefits() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transforma el progreso de scroll en movimiento de fondo
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative py-60 text-center overflow-hidden"
    >
      {/* Imagen de fondo parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/fondosestaticos/fondo1.jpeg')",
          y: bgY,
        }}
      />

      {/* Contenido con fondo translúcido encima */}
      <div className="relative z-10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-xl max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
          ¿Qué incluye el programa?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 text-blue-500">{b.icon}</div>
              <p className="text-lg text-gray-800 dark:text-gray-200">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


