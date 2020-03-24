import Layout from "../../../components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { isProfileCompleted } from "../../../profile";

const Summary = () => {
  const user = useSelector((state: RootState) => state.user);
  let fare;
  if (user.earnings && user.familyComposition) {
    fare = user.earnings / user.familyComposition.quotient / 10;
  }
  const moneyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR"
  });
  return (
    <Layout>
      <section className="section section-color">
        <div className="container">
          <h2 className="section__title">Inscription en crèche</h2>
        </div>
      </section>
      <section className="section section-grey">
        <div className="container">
          <div className="panel">
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
              <div>
                Votre quotient famililal :{" "}
                <b>
                  {user.familyComposition
                    ? user.familyComposition.quotient
                    : "en cours de traitement"}
                </b>
              </div>
              <div>
                Vos enfants :{" "}
                {!user.familyComposition && <b>en cours de traitement</b>}
              </div>
              {user.familyComposition && (
                <ul>
                  {user.familyComposition.children.map(child => (
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
            </p>
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
