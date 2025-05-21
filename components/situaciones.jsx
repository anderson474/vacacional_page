"use client";
import { TypeAnimation } from "react-type-animation";


export default function Situaciones() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Columna izquierda - texto */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center lg:text-left">
            <TypeAnimation
              sequence={[
                "¿Te identificas con alguna de estas situaciones?", 
                5000,
                "Esta es la respuesta... ", 
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <ul className="space-y-4 text-gray-700 list-disc pl-5">
            <li>Sientes que los cursos de Pre-Saber 11º no te motivan ni te preparan realmente.</li>
            <li>Sueñas con entrar a la universidad y empezar a vivirla desde ya.</li>
            <li>Quisieras prepararte para el ICFES de una forma diferente, rodeado de expertos, amigos y actividades dinámicas.</li>
            <li>Quieres estudiar tu carrera soñada totalmente gratis.</li>
            <li>Sueñas con entrar a la universidad, pero también quisieras tener alguna ventaja o beneficio desde ya.</li>
            <p className="font-bold text-2xl">¡Tenemos algo para ti!</p>
            <li>Nuestro Vacacional Pre-Saber 11º con inmersión universitaria, una experiencia única del Grupo Educativo Avancemos en alianza con la Universidad de Medellín.</li>
            <li>Durante dos semanas intensivas, vivirás un curso práctico y dinámico que te preparará para el examen, mientras exploras la vida universitaria desde adentro.</li>
          </ul>
        </div>

        {/* Columna derecha - video */}
        <div className="lg:w-1/2 w-full">
          <video
            src="/videos/testimonioVacacional.mp4"
            controls
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
