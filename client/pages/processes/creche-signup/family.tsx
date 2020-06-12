import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { isFamilyCompositionCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";
import AutomaticFamilyCompositionForm from "../../../components/AutomaticFamilyCompositionForm";
import ManualFamilyCompositionForm from "../../../components/ManualFamilyCompositionForm";
import Tour from "../../../components/Tour";

const FamilyStep = () => {
  const steps = [
    {
      content:
        "La mairie doit maintenant récupérer votre quotient familial (QF).",
      target: ".family-title",
      disableBeacon: true,
    },
    {
      content: (
        <>
          <p>
            Pour laisser la mairie récupérer automatiquement votre QF, utilisez
            ce formulaire pré-rempli avec des données de démonstration.
          </p>
          <p>
            {" "}
            Grace à ces identifiants, la mairie va utiliser{" "}
            <strong>API Particulier</strong> pour récupérer votre QF et
            l'instruire dans votre dossier.
          </p>
        </>
      ),
      target: '[data-role="automatic-family"]',
      disableBeacon: true,
      spotlightClicks: true,
    },
    {
      content:
        "Si vous ne souhaitez par laisser la mairie récupérer automatiquement votre QF par API Particulier, vous pouvez toujours saisir un justificatif papier.",
      target: '[data-role="manual-family"]',
      disableBeacon: true,
      spotlightClicks: true,
    },
  ];
  return (
    <CrecheSignupLayout step="familyComposition">
      <Tour steps={steps} continuous={true} />
      <h2 className="family-title">Composition familliale</h2>
      <div className="flex">
        <div className="flex-1 px-16">
          <AutomaticFamilyCompositionForm />
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
          <ManualFamilyCompositionForm />
        </div>
      </div>
    </CrecheSignupLayout>
  );
};

FamilyStep.getInitialProps = (ctx: NextPageContext) => {
  if (!ctx.isServer) {
    const { user } = ctx.store.getState();
    if (user && isFamilyCompositionCompleted(user)) {
      Router.push(
        "/processes/creche-signup/summary",
        "/demarches/inscription-en-creche/resume"
      );
    }
  }
};

export default FamilyStep;
