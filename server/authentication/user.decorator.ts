import { createParamDecorator } from "@nestjs/common";
import { IncompleteProfile } from "../../client/profile";

export const User = createParamDecorator((_, req):
  | IncompleteProfile
  | undefined => {
  return req.user;
});
