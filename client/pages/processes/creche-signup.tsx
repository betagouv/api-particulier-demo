import Link from "next/link";
import Layout from "../../components/Layout";

const CrecheSignup = () => (
  <Layout>
    <section className="section section-color">
      <div className="container">
        <h2 className="section__title">Inscription en crèche</h2>
      </div>
    </section>
    <section className="section section-grey">
      <div className="container">
        <div className="panel">
          <h3>Prérequis</h3>
          <p>Les conditions d'inscription à la crèche sont les suivantes :</p>
          <ul>
            <li>
              avoir votre lieu de résidence principale sur la commune de
              Coruscant
            </li>
            <li>avoir un enfant agé de 1 à 3 ans</li>
          </ul>
          <h3>Durée de la démarche</h3>
          <p>La démarche prend entre 3 et 5 minutes à réaliser.</p>
        </div>
        <h2>Connexion</h2>
        <div className="panel">
          <Link href="/login">
            <button className="button">France Connect</button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default CrecheSignup;
