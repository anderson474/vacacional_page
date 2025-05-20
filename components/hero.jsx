"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* VIDEO con fade-in */}
        <motion.div
          className="w-full md:w-1/2 h-[500px] flex justify-center items-center"
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

