import { createParamDecorator } from "@nestjs/common";
import { Profile } from "../../client/profile";

export const User = createParamDecorator((_, req): Profile | undefined => {
  return req.user;
});
