import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { areEarningsCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";
import { useReferenceEarnings } from "../../../hooks/reference-earnings";
import { useState } from "react";

const EarningsStep = () => {
  const { loading, error, fetchReferenceEarnings } = useReferenceEarnings();
  const [taxNumber, setTaxNumber] = useState("1902599999001");
  const [noticeNumber, setNoticeNumber] = useState("1902599999001");

  return (
    <CrecheSignupLayout step="referenceEarnings">
      <h2>Revenu fiscal de référence</h2>
      <div className="flex">
        <div className="flex-1 px-16">
          <h3 className="text-center">Récupérer automatiquement</h3>
          <p>
            <i className="text-sm">
              En optant pour la récupération automatique de vos données, vous
              accélérez le temps de traitement de votre demande.
            </i>
          </p>
          <div className="form__group">
            <label htmlFor="taxNumber">Numéro fiscal</label>
            <input
              name="taxNumber"
              value={taxNumber}
              onChange={event => setTaxNumber(event.target.value)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="noticeNumber">Référence d'avis d'imposition</label>
            <input
              name="noticeNumber"
              value={noticeNumber}
              onChange={event => setNoticeNumber(event.target.value)}
            />
          </div>
          {error && (
            <p className="text-red-600">
              Informations incorrects, veuillez vérifier votre saisie
            </p>
          )}
          <div className="flex justify-center mt-2">
            <button
              onClick={() => fetchReferenceEarnings(taxNumber, noticeNumber)}
              className="button large"
              disabled={loading}
            >
              {loading ? "Récupération en cours..." : "Récupérer"}
            </button>
          </div>
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
          <h3 className="text-center">Renseigner manuellement</h3>
          <p>
            <i className="text-sm">
              Veuillez noter qu'en soumettant votre avis d'imposition, cela
              implique un traitement humain du document, et augmente donc le
              temps de traitement de votre demande de deux semaines minimum.
            </i>
          </p>
          <div className="form__group">
            <label htmlFor="notice">Dernier avis d'imposition</label>
            <input name="notice" type="file" />
          </div>
          <div className="flex justify-center mt-2">
            <button className="button large">Soumettre</button>
          </div>
        </div>
      </div>
    </CrecheSignupLayout>
  );
};

EarningsStep.getInitialProps = (ctx: NextPageContext) => {
  if (!ctx.isServer) {
    const { user } = ctx.store.getState();
    if (user && areEarningsCompleted(user)) {
      Router.push(
        "/processes/creche-signup/family",
        "/demarches/inscription-en-creche/famille"
      );
    }
  }
};

export default EarningsStep;
