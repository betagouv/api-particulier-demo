import Layout from "../../../components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import Telepoints from "../../../components/Telepoints";
import MonCompteFormation from "../../../components/MonCompteFormation";

const Summary = () => {
  return (
    <Layout>
      <section className="section section-color">
        <div className="container">
          <h2 className="section__title">
            Enregistrement du périmètre iso-citoyen
          </h2>
        </div>
      </section>
      <section className="section section-grey">
        <div className="container">
          <div className="panel">
            <h1>Vos données</h1>
            <MonCompteFormation />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Summary;
