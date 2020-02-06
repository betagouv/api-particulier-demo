import Layout from "../../components/Layout";

const CrecheSignup = () => (
  <Layout>
    <section className="section section-color">
      <div className="container">
        <h2 className="section__title">Inscrire mon enfant à la crèche</h2>
      </div>
    </section>
    <section className="section section-grey">
      <div className="container">
        <h1>Modalités d'inscription</h1>
        <div className="panel">
          <p>Les conditions d'inscription à la crèche sont les suivantes :</p>
          <ul>
            <li>
              avoir votre lieu de résidence principale sur la commune de
              Coruscant
            </li>
            <li>avoir un enfant agé de 1 à 3 ans</li>
          </ul>
          <p>
            Afin d'inscrire votre enfant à la crèche de Coruscant, nous devons
            vérifiez que votre situation est conforme aux conditions
            sus-mentionnées, puis de fixer un tarif en accord avec vos revenus.
          </p>
          <p>
            Pour ce faire, nous devons disposer des informations suivantes vous
            concernant :
          </p>
          <ul>
            <li>adresse de votre foyer fiscal</li>
            <li>votre revenu fiscal de référence</li>
            <li>votre situation familiale</li>
          </ul>
        </div>
        <h1>Choisissez votre moyen d'inscription</h1>
        <div className="panel">
          <p>
            Afin de collecter les informations nécessaires à votre démarche,
            vous disposez de 3 moyens, présentés ci-dessous du plus simplifié au
            plus manuel.
          </p>
        </div>
        <div className="row">
          <div className="card">
            <div className="card__content">
              <h3>France Connect</h3>
              <p>
                En vous identifiant avec France Connect, vous serez invité à
                donner votre consentement pour la récupération automatique de
                l'intégralité des donées nécessaires à votre inscription.
              </p>
              <div className="flex justify-center">
                <button className="button large">
                  Je passe par France Connect
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <h3>API Particulier</h3>
              <p>
                En utilisant API Particulier, vous serez invité à saisir des
                identifiants propres à la CAF et à la DGFIP afin de procéder à
                la récupération automatique des données nécessaires à votre
                inscription.
              </p>
              <div className="flex justify-center">
                <button className="button large">
                  Je passe par API Particulier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CrecheSignup;
