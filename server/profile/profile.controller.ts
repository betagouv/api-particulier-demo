import { Get, Controller } from "@nestjs/common";
import { User } from "../authentication/user.decorator";
import { IncompleteProfile } from "./profile";
import { ProfileRouter } from "./profile.router";

@Controller()
export class ProfileController {
  constructor(private readonly profileRouter: ProfileRouter) {}

  @Get("/next-step")
  getNextStepUri(@User() user: IncompleteProfile) {
    return this.profileRouter.getNextStepUri(user);
  }
}
