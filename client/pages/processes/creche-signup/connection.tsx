import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import fcLogo from "../../../assets/images/france-connect.svg";
import Link from "next/link";

const CrecheSignup = () => (
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
        <div className="form__group">
          <label htmlFor="username">Email</label>
          <input name="username" defaultValue="han@solo.star" />
        </div>
        <div className="form__group">
          <label htmlFor="password">Mot de passe</label>
          <input name="password" type="password" defaultValue="jabbaMyLove" />
        </div>
        <div className="flex justify-center mt-2">
          <button className="button large">Se connecter</button>
        </div>
      </div>
    </div>
  </CrecheSignupLayout>
);

export default CrecheSignup;
