"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Aliado() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-8">

        {/* Título */}
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestro aliado
        </motion.h2>

        {/* Logo de la UdeM con entrada animada */}
        <motion.div
          className="flex justify-center items-center w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
        >
          <Image
            src="/fondosestaticos/uMedellin.png"
            alt="Universidad de Medellín"
            width={500}
            height={500}
          />
        </motion.div>


        {/* Texto descriptivo */}
        <motion.p
          className="text-lg text-gray-700 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Este vacacional se realiza en alianza con la{" "}
          <span className="font-semibold text-[#96b422]">
            <TypeAnimation
              sequence={[
                "Universidad de Medellín",
                2000,
                "Universidad de Medellín 🌟",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
          , una institución reconocida por su calidad y trayectoria. Vivirás una experiencia real de vida universitaria en sus instalaciones.
        </motion.p>
      </div>
    </section>
  );
}

