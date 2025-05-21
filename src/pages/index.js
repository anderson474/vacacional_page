import Layout from "@components/layout";
import Hero from "@components/hero";
import Benefits from "@components/benefits";
import Methodology from "@components/methodology";
import Details from "@components/details";
import CTA from "@components/cta";
import Situaciones from "@components/situaciones";
import Aliado from "@components/aliado";
import Beneficios from "@components/beneficios";
import Bonus from "@components/bonus";
import Inversion from "@components/inversion";




export default function Home() {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Methodology />
      <Situaciones />
      <Details />
      <Aliado />
      <Beneficios />
      <Bonus />
      <Inversion />
      
      <CTA />
    </Layout>
  );
}
