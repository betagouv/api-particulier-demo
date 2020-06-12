import React from "react";
import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { areEarningsCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";
import AutomaticReferenceEarningsForm from "../../../components/AutomaticReferenceEarningsForm";
import ManualReferenceEarningsForm from "../../../components/ManualReferenceEarningsForm";
import Tour from "../../../components/Tour";

const EarningsStep = () => {
  const steps = [
    {
      content:
        "La mairie doit maintenant récupérer votre revenu fiscal de référence (RFR).",
      target: ".earnings-title",
      disableBeacon: true,
    },
    {
      content: (
        <>
          <p>
            Pour laisser la mairie récupérer automatiquement votre RFR, utilisez
            ce formulaire pré-rempli avec des données de démonstration.
          </p>
          <p>
            {" "}
            Grace à ces identifiants, la mairie va utiliser{" "}
            <strong>API Particulier</strong> pour récupérer votre RFR et
            l'instruire dans votre dossier.
          </p>
        </>
      ),
      target: '[data-role="automatic-earnings"]',
      disableBeacon: true,
      spotlightClicks: true,
    },
    {
      content:
        "Si vous ne souhaitez par laisser la mairie récupérer automatiquement votre RFR par API Particulier, vous pouvez toujours saisir un justificatif papier.",
      target: '[data-role="manual-earnings"]',
      disableBeacon: true,
      spotlightClicks: true,
    },
  ];
  return (
    <CrecheSignupLayout step="referenceEarnings">
      <Tour steps={steps} continuous={true} />
      <h2 className="earnings-title">Revenu fiscal de référence</h2>
      <div className="flex">
        <div className="flex-1 px-16">
          <AutomaticReferenceEarningsForm />
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
          <ManualReferenceEarningsForm />
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
