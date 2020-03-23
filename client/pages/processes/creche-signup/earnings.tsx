import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { areEarningsCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";
import AutomaticReferenceEarningsForm from "../../../components/AutomaticReferenceEarningsForm";
import ManualReferenceEarningsForm from "../../../components/ManualReferenceEarningsForm";

const EarningsStep = () => (
  <CrecheSignupLayout step="referenceEarnings">
    <h2>Revenu fiscal de référence</h2>
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
