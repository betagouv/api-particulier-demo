import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { isIdentityCompleted, areEarningsCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";

const EarningsStep = () => (
  <CrecheSignupLayout step="referenceEarnings">
    <h2>Revenus</h2>
  </CrecheSignupLayout>
);

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
