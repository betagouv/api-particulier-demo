import { Strategy } from "passport-local";
import { Injectable } from "@nestjs/common";
import passport from "passport";

@Injectable()
export class LocalStragy extends Strategy {
  constructor() {
    super((username: string, password: string, done) => {
      done(null, {
        name: "Georges",
        surname: "Moustaki"
      });
    });
    passport.use(this);
  }
}
