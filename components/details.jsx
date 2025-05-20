"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Duración", desc: "4 semanas (junio-julio)" },
  { title: "Modalidad", desc: "Presencial y virtual" },
  { title: "Horario", desc: "Lunes a viernes, 8:00 a.m. - 12:00 m." },
];

export default function Details() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative py-40 text-center overflow-hidden">
      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/fondosestaticos/fondo2.png')", // Cambia la ruta según tu imagen
          y: bgY,
        }}
      />

      {/* Contenido con fondo translúcido */}
      <div className="relative z-10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-xl max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
          Información clave
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-64 shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
