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
      <h2>Revenus</h2>
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
      <div className="flex justify-center mt-2">
        <button
          onClick={() => fetchReferenceEarnings(taxNumber, noticeNumber)}
          className="button large"
        >
          Récupérer mon revenu fiscal de référence
        </button>
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
