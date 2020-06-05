import Layout from "./Layout";

type Props = {
  step: Step;
};
type Step = "connection" | "data";

const stepClassesBuilder = (step: Step) => {
  switch (step) {
    case "connection":
      return {
        connection: "active",
      };
    case "data":
      return {
        connection: "done",
        data: "active",
      };
  }
};

const EnregistrementPerimetreIsoCitoyenLayout: React.FunctionComponent<Props> = (
  props
) => {
  const stepClasses = stepClassesBuilder(props.step);
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
          <ul className="steps-form">
            <li className={stepClasses.connection}>
              <div>Connexion</div>
            </li>
            <li className={stepClasses.data}>
              <div>Récapitulatif</div>
            </li>
          </ul>
          <div className="panel">{props.children}</div>
        </div>
      </section>
    </Layout>
  );
};

export default EnregistrementPerimetreIsoCitoyenLayout;
