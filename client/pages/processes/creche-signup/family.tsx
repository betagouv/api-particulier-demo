import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { isFamilyCompositionCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";

const FamilyStep = () => (
  <CrecheSignupLayout step="familyComposition">
    <h2>Composition familliale</h2>
  </CrecheSignupLayout>
);

FamilyStep.getInitialProps = (ctx: NextPageContext) => {
  if (!ctx.isServer) {
    const { user } = ctx.store.getState();
    if (user && isFamilyCompositionCompleted(user)) {
      Router.push(
        "/processes/creche-signup/earnings",
        "/demarches/inscription-en-creche/famille"
      );
    }
  }
};

export default FamilyStep;
