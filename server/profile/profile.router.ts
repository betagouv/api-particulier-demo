import {
  IncompleteProfile,
  isIdentityCompleted,
  areEarningsCompleted,
  isFamilyCompositionCompleted
} from "./profile";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileRouter {
  getNextStepUri(profile: IncompleteProfile): string {
    if (!isIdentityCompleted(profile)) {
      return "/identity";
    }
    if (!areEarningsCompleted(profile)) {
      return "/earnings";
    }
    if (!isFamilyCompositionCompleted(profile)) {
      return "/family";
    }
    return "/completed";
  }
}
