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
          href="/processes/creche-signup/connection"
          as="/demarches/inscription-en-creche"
        >
          <div className="panel cursor-pointer">
            <div>Inscrire mon enfant à la crèche</div>
          </div>
        </Link>
        <div className="panel cursor-pointer">
          <div>Effectuer ma demande de bourse étudiante</div>
        </div>
      </div>
    </section>
    <section className="section">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
