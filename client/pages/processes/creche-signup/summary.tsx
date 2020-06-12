import Layout from "../../../components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { isProfileCompleted } from "../../../profile";
import Tour from "../../../components/Tour";

const Summary = () => {
  const user = useSelector((state: RootState) => state.user);
  let fare;
  if (user.earnings && user.familyComposition) {
    fare = (user.earnings * user.familyComposition.quotient) / 100000;
  }
  const moneyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  const steps = [
    {
      content: (
        <>
          <p>Ceci est l'écran de récapitulatif de la démarche.</p>
          <p>Les données récoltées par la mairie y sont résumées.</p>
          {user.earnings && user.familyComposition && (
            <>
              <p>
                Dans le cas présent, toutes les informations nécessaires sont
                connues de la mairie.
              </p>
              <p>
                La mairie peut alors proposer directement un tarif, ici par
                calculer comme suit : {moneyFormatter.format(user.earnings)} *{" "}
                {user.familyComposition.quotient} / 10 000 ={" "}
                {moneyFormatter.format(fare)}
              </p>
            </>
          )}
        </>
      ),
      target: ".summary",
      disableBeacon: true,
    },
  ];
  return (
    <Layout>
      <Tour steps={steps} />
      <section className="section section-color">
        <div className="container">
          <h2 className="section__title">Inscription en crèche</h2>
        </div>
      </section>
      <section className="section section-grey">
        <div className="container">
          <div className="panel summary">
            <h1>Récapitulatif</h1>
            <p>
              Votre revenu fiscal de référence :{" "}
              <b>
                {user.earnings
                  ? moneyFormatter.format(user.earnings)
                  : "en cours de traitement"}
              </b>
            </p>
            <p>
              Votre quotient famililal :{" "}
              <b>
                {user.familyComposition
                  ? user.familyComposition.quotient
                  : "en cours de traitement"}
              </b>
            </p>
            <div>
              Vos enfants :{" "}
              {!user.familyComposition && <b>en cours de traitement</b>}
            </div>
            <div>
              {user.familyComposition && (
                <ul>
                  {user.familyComposition.children.map((child) => (
                    <li key={child.name}>
                      <b>{child.name}</b>, né{child.sex === "female" ? "e" : ""}{" "}
                      le{" "}
                      {new Intl.DateTimeFormat("fr-FR").format(
                        new Date(child.birthDate)
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {fare && (
              <p>
                Vos frais mensuels de crèche sont estimés à{" "}
                <b>{moneyFormatter.format(fare)}</b>
              </p>
            )}
            <p>
              Votre demande a été déposée le{" "}
              {new Intl.DateTimeFormat("fr-FR").format(new Date())}. Vous
              recevrez un mail dès validation de la demande.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Summary;
