import {
  IncompleteProfile,
  isIdentityCompleted,
  areEarningsCompleted,
  isFamilyCompositionCompleted
} from "../../client/profile";
import { Injectable } from "@nestjs/common";
import { Step } from "./steps";

@Injectable()
export class FrontendRouter {
  getNextStepUri(
    profile: IncompleteProfile | undefined,
    currentStep: Step
  ): Step | undefined {
    if (!profile) {
      if (currentStep !== "Connection") {
        return "Connection";
      }
      return;
    }
    if (!areEarningsCompleted(profile)) {
      if (currentStep !== "Earnings") {
        return "Earnings";
      }
      return;
    }
    if (!isFamilyCompositionCompleted(profile)) {
      if (currentStep !== "FamilySituation") {
        return "FamilySituation";
      }
      return;
    }

    return;
  }
}
