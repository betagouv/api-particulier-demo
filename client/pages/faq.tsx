import Layout from "../components/Layout";

const FAQ = () => (
  <Layout>
    <section className="section section-color">
      <div className="container">
        <h2 className="section__title">Foire aux questions</h2>
        <p className="section__subtitle">
          Tous ce que vous avez toujours voulu savoir sur API Particulier sans
          jamais oser le demander
        </p>
      </div>
    </section>
    <section className="section section-white">
      <div className="container container-small">
        <h1>Qu'est-ce qu'API Particulier ?</h1>
        <p>
          API Particulier est une API écran qui permet aux acteurs publics,
          comme notre mairie, de récupérer les données des particuliers à partir
          d'une simple saisie d'ientifiant.
        </p>
        <h1>Pourquoi ma mairie utilise API Particulier ?</h1>
        <p>
          Dans la démarche du Dites-le nous une fois, la mairie de Coruscant a
          décidé de se connecter à API Particulier afin de simplifier les
          démarches des citoyens.
        </p>
        <p>
          En utilisant API Particulier, les citoyens n'ont plus à fournir de
          justificatif papier des différentes informations demandées au cours de
          démarches, comme leur revenu fiscal de référence par exemple.
        </p>
        <h1>Pourquoi parle-t-on d'API écran ?</h1>
        <p>
          API Particulier ne conserve aucune donnée personnelle. Il s'agit d'une
          API simple à utiliser pour la mairie, qui masque la difficulté à se
          connecter à différentes sources de données (appelées fournisseurs de
          données) pour récupérer l'ensemble des informations nécessaires aux
          démarches.
        </p>
        <p>
          Concrètement, utiliser API Particulier, c'est bénéficier de plusieurs
          sources d'informations sur les citoyens, aggrégées dans une interface
          unique.
        </p>
      </div>
    </section>
  </Layout>
);

export default FAQ;
