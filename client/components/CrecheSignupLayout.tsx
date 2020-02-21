import Layout from "./Layout";

type Props = {
  step: Step;
};
type Step =
  | "connection"
  | "identity"
  | "referenceEarnings"
  | "familyComposition";

const stepClassesBuilder = (step: Step) => {
  switch (step) {
    case "connection":
      return {
        connection: "active"
      };
    case "identity":
      return {
        connection: "done",
        identity: "active"
      };
    case "referenceEarnings":
      return {
        connection: "done",
        identity: "done",
        referenceEarnings: "active"
      };
    case "familyComposition":
      return {
        connection: "done",
        identity: "done",
        referenceEarnings: "done",
        familyComposition: "active"
      };
  }
};

const CrecheSignupLayout: React.FunctionComponent<Props> = props => {
  const stepClasses = stepClassesBuilder(props.step);
  return (
    <Layout>
      <section className="section section-color">
        <div className="container">
          <h2 className="section__title">Inscription en crèche</h2>
        </div>
      </section>
      <section className="section section-grey">
        <div className="container">
          <ul className="steps-form">
            <li className={stepClasses.connection}>
              <div>Connexion</div>
            </li>
            <li className={stepClasses.identity}>
              <div>Identité</div>
            </li>
            <li className={stepClasses.referenceEarnings}>
              <div>Revenus</div>
            </li>
            <li className={stepClasses.familyComposition}>
              <div>Compositon familiale</div>
            </li>
          </ul>
          <div className="panel">{props.children}</div>
        </div>
      </section>
    </Layout>
  );
};

export default CrecheSignupLayout;
