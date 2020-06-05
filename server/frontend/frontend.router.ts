import { Profile } from "../../client/profile";
import { Injectable } from "@nestjs/common";
import { Step } from "./steps";

@Injectable()
export class FrontendRouter {
  getNextStepUri(
    profile: Profile | undefined,
    currentStep: Step
  ): Step | undefined {
    if (!profile) {
      if (currentStep !== "Connection") {
        return "Connection";
      }
      return;
    }
    return;
  }
}
