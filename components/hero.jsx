"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20 px-6">
      {/* Caja de beneficios de la Universidad de Medellín */}
      <div className="absolute top-4 left-8 bg-white bg-opacity-90 border-l-4 border-[#96b422] p-4 rounded-lg shadow-lg max-w-xs z-50">
            <h3 className="text-lg font-semibold text-gray-900">¡Beneficios especiales!</h3>
            <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
              <li>Beca del 100% con la Universidad de Medellín</li>
              <li>20% de descuento en carreras profesionales</li>
            </ul>
          </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3">

        {/* VIDEO con fade-in */}
        <motion.div
          className="relative w-full md:w-1/2 h-[500px] flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <video
            src="/videos/vacacional.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="h-full rounded-xl"
          />

        </motion.div>


        {/* TEXTO animado */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Título con escritura */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            <TypeAnimation
              sequence={[
                "Curso Vacacional Pre Saber", 
                2000,
                "Prepárate para el Saber 11", 
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 text-lg text-gray-700">
            Asegura tus resultados en vacaciones con un curso intensivo y práctico.
          </p>

          {/* Botón animado */}
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRkhiMz9icW0iNcCl9RWMhjpfHS5oG_7vZ9u4HUvJrnjkfsA/viewform"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-block bg-[#96b422] hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded shadow"
          >
            Inscríbete ahora
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

