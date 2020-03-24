import CrecheSignupLayout from "../../../components/CrecheSignupLayout";
import { isFamilyCompositionCompleted } from "../../../profile";
import { NextPageContext } from "next";
import Router from "next/router";
import AutomaticFamilyCompositionForm from "../../../components/AutomaticFamilyCompositionForm";
import ManualFamilyCompositionForm from "../../../components/ManualFamilyCompositionForm";

const FamilyStep = () => (
  <CrecheSignupLayout step="familyComposition">
    <h2>Composition familliale</h2>
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

FamilyStep.getInitialProps = (ctx: NextPageContext) => {
  if (!ctx.isServer) {
    const { user } = ctx.store.getState();
    if (user && isFamilyCompositionCompleted(user)) {
      Router.push("/");
    }
  }
};

export default FamilyStep;
