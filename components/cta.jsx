import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function CTA() {
  return (
    <>
      {/* Sección CTA */}
      <section id="cta" className="bg-gray-200 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¡Asegura tu cupo hoy mismo!</h2>
        <a
          href="https://wa.me/573054240301"
          target="_blank"
          className="inline-block bg-[#96b422] text-white px-6 py-3 rounded shadow hover:bg-gray-800"
        >
          Contáctanos por WhatsApp
        </a>
      </section>

      {/* Footer institucional */}
      <footer className="bg-gray-100 text-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Logo y redes */}
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/fondosestaticos/LOGO.png"
              alt="Logo Avancemos"
              width={300}
              height={300}
            />
            <div className="flex justify-center md:justify-start gap-4 text-2xl text-[#96b422]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Términos y condiciones */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">📄 Términos y Condiciones</h3>
            <p className="text-sm mb-4">
              Al inscribirte en el curso aceptas nuestras políticas de tratamiento de datos y condiciones de participación.
            </p>
            <a
              href="/pdfs/terminos-condiciones.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#96b422] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition"
            >
              Ver PDF
            </a>
          </div>

          {/* Mapa de ubicación */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-2 text-center lg:text-left">📍 Ubicación</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.803878857578!2d-75.59029552411618!3d6.244203093748482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44285cc96b629f%3A0x8382ae6d8989e33!2sUniversidad%20de%20Medell%C3%ADn!5e0!3m2!1ses!2sco!4v1716234040006!5m2!1ses!2sco"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

