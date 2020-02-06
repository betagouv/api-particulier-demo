import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <section className="section section-color patterned">
      <div className="container">
        <h2 className="section__title">Démonstrateur API Particulier</h2>
        <p className="section__subtitle">
          Effectuez vos démarches en ligne sans fournir de justificatifs papier
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1>Votre mairie 100% numérique</h1>
        <p>
          Dans le cadre de l'initiative{" "}
          <a href="https://www.numerique.gouv.fr/actualites/simplification-des-demarches-administratives-dites-le-nous-une-fois-passe-a-la-vitesse-superieure/">
            Dites-le nous une fois
          </a>{" "}
          de l'état, la mairie de Coruscant a mis en place de nombreux outils
          pour numériser et simplifier l'ensemble des démarches accessibles aux
          citoyens de Coruscant.
        </p>
        <p>
          La simplification des démarches consiste à ne plus demander de
          justificatifs papiers aux citoyens en effectuant du préremplissage de
          leurs données personnelles dans les démarches.
        </p>
        <p>
          Pour ce faire, la mairie s'est appuyée sur deux initiatives publiques
          au service des citoyens et des collectivités, API Particulier et
          France Connect.
        </p>
      </div>
    </section>
    <section className="section section-grey">
      <div className="flex justify-center">
        <Link href="/processes" as="demarches">
          <a className="button large">Accéder aux démarches</a>
        </Link>
      </div>
    </section>
    <section className="section">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  </Layout>
);

export default Home;
