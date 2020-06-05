import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { LocalStragy } from "./local.strategy";
import { AuthenticationController } from "./authentication.controller";
import passport from "passport";
import { AuthenticatedMiddleware } from "./authenticated.middleware";

@Module({
  controllers: [AuthenticationController],
  providers: [LocalStragy, AuthenticatedMiddleware],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Passport
    consumer
      .apply(
        passport.authenticate("local", {
          successRedirect:
            "/demarches/enregistrement-perimetre-iso-citoyen/resume",
        })
      )
      .forRoutes({ path: "login", method: RequestMethod.POST });
  }
}
