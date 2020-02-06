import Link from "next/link";
import Layout from "../components/Layout";

const Processes = () => (
  <Layout>
    <section className="section section-color">
      <div className="container">
        <h2 className="section__title">Les démarches disponibles</h2>
      </div>
    </section>
    <section className="section section-grey">
      <div className="container">
        <Link
          href="/processes/creche-signup"
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
    </section>
  </Layout>
);

export default Processes;
