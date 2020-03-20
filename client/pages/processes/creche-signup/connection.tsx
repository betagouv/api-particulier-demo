import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import fcLogo from "../../../assets/images/france-connect.svg";
import Link from "next/link";
import Router from "next/router";
import { isIdentityCompleted } from "../../../profile";
import { NextPageContext } from "next";

const ConnectionStep = () => (
  <CrecheSignupLayout step="connection">
    <h2>Connexion</h2>
    <div className="flex">
      <div className="flex-1 flex justify-center">
        <Link href="/login">
          <img
            className="cursor-pointer"
            src={fcLogo}
            alt="Se connecter avec FranceConnect"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex-1 flex justify-center">
          <div className="border border-solid border-gray-400 h-full"></div>
        </div>
        <div className="p-4">OU</div>
        <div className="flex-1 flex justify-center">
          <div className="border border-solid border-gray-400 h-full"></div>
        </div>
      </div>
      <div className="flex-1 px-16">
        <h3 className="text-center">Se connecter</h3>
        <form action="/login" method="post">
          <div className="form__group">
            <label htmlFor="username">Email</label>
            <input name="username" defaultValue="han@solo.star" />
          </div>
          <div className="form__group">
            <label htmlFor="password">Mot de passe</label>
            <input name="password" type="password" defaultValue="jabbaMyLove" />
          </div>
          <div className="flex justify-center mt-2">
            <button type="submit" className="button large">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </CrecheSignupLayout>
);

ConnectionStep.getInitialProps = (ctx: NextPageContext) => {
  if (!ctx.isServer) {
    const { user } = ctx.store.getState();
    if (user && isIdentityCompleted(user)) {
      Router.push(
        "/processes/creche-signup/earnings",
        "/demarches/inscription-en-creche/revenus"
      );
    }
  }
};

export default ConnectionStep;
