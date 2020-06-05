import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <section className="section section-color patterned">
      <div className="container">
        <h2 className="section__title">Les démarches en ligne</h2>
        <p className="section__subtitle">
          Effectuez vos démarches en ligne sans fournir de justificatifs papier
        </p>
      </div>
    </section>
    <section className="section section-grey">
      <div className="container">
        <Link
          href="/processes/enregistrement-perimetre-iso-citoyen/connection"
          as="/demarches/enregistrement-perimetre-iso-citoyen/connexion"
        >
          <div className="panel cursor-pointer">
            <div>Enregistrement de mon périmètre iso-citoyen</div>
          </div>
        </Link>
      </div>
    </section>
    <section className="section"></section>
  </Layout>
);

export default Home;
