import { Strategy } from "passport-local";
import { Injectable } from "@nestjs/common";
import passport from "passport";
import { Profile } from "../../client/profile";

@Injectable()
export class LocalStragy extends Strategy {
  constructor() {
    super((username: string, password: string, done) => {
      done(null, {
        username,
        password,
      } as Profile);
    });
    passport.use(this);
  }
}
