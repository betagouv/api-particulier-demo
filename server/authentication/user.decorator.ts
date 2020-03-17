import { createParamDecorator } from "@nestjs/common";
import { IncompleteProfile } from "../profile/profile";

export const User = createParamDecorator(
  (_, req): IncompleteProfile => {
    return req.user;
  }
);
