"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-5 md:py-10 px-6">
      
      <div className="max-w-7xl flex flex-col md:flex-row items-start gap-3">



         <motion.div
          className="relative w-full md:w-1/2 h-full flex justify-center items-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Image
            src="/fondosestaticos/LOGO.png" // Ajusta al path correcto
            alt="Logo Avancemos"
            width={300}
            height={300}
            className=""
          />
        </motion.div>



        {/* VIDEO con fade-in */}
        <motion.div
          className="relative w-full md:w-1/2 h-[500px] flex justify-start items-center"
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


      {/* Contenedor flex con animación */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-5"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >


        {/* Caja de beneficios de la Universidad de Medellín */}
        <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="bg-white bg-opacity-90 border-l-4 border-[#96b422] p-4 rounded-lg shadow-lg w-full max-w-xl"
      >
        <h3 className="text-2xl font-extrabold text-gray-900">¡Beneficios especiales!</h3>
        <p className="mt-2 text-md text-gray-700">
          Beca del 100% con la Universidad de Medellín al mejor puntaje del vacacional
        </p>
      </motion.div>



  {/* Título con escritura */}
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-10">
      Préparate con nuestro vacacional Pre-Saber 11°
    </h1>

    {/* Subtítulo */}
    <p className="mt-2 text-lg text-gray-700">
      Asegura tus resultados en vacaciones con un curso intensivo y práctico.
    </p>

    {/* Botón animado */}
    <motion.a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeRkhiMz9icW0iNcCl9RWMhjpfHS5oG_7vZ9u4HUvJrnjkfsA/viewform"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="mt-4 inline-block bg-[#96b422] hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded shadow"
    >
      Inscríbete ahora
    </motion.a>
  </motion.div>


      </div>
    </section>
  );
}

