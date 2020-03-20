import { Strategy } from "passport-local";
import { Injectable } from "@nestjs/common";
import passport from "passport";
import { IncompleteProfile } from "../../client/profile";

@Injectable()
export class LocalStragy extends Strategy {
  constructor() {
    super((username: string, password: string, done) => {
      done(null, {
        name: "Georges",
        surname: "Moustaki",
        dateOfBirth: new Date("03-03-1965")
      } as IncompleteProfile);
    });
    passport.use(this);
  }
}
