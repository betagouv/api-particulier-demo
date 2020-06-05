import Router from "next/router";
import { NextPageContext } from "next";
import EnregistrementPerimetreIsoCitoyenLayout from "../../../components/EnregistrementPerimetreIsoCitoyenLayout";

const ConnectionStep = () => (
  <EnregistrementPerimetreIsoCitoyenLayout step="connection">
    <h2>Connexion</h2>
    <div className="flex">
      <div className="flex-1 px-16">
        <h3 className="text-center">Se connecter</h3>
        <form action="/login" method="post">
          <div className="form__group">
            <label htmlFor="username">Numéro fiscal DGFIP</label>
            <input name="username" />
          </div>
          <div className="form__group">
            <label htmlFor="password">Mot de passe DGFIP</label>
            <input name="password" type="password" />
          </div>
          <div className="flex justify-center mt-2">
            <button type="submit" className="button large">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </EnregistrementPerimetreIsoCitoyenLayout>
);

ConnectionStep.getInitialProps = (ctx: NextPageContext) => {
  if (!ctx.isServer) {
    const { user } = ctx.store.getState();
    if (user) {
      Router.push(
        "/processes/enregistrement-perimetre-iso-citoyen/summary",
        "/demarches/enregistrement-perimetre-iso-citoyen/resume"
      );
    }
  }
};

export default ConnectionStep;
