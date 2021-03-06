import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from "@nestjs/common";
import { LocalStragy } from "./local.strategy";
import { AuthenticationController } from "./authentication.controller";
import passport from "passport";
import { AuthenticatedMiddleware } from "./authenticated.middleware";

@Module({
  controllers: [AuthenticationController],
  providers: [LocalStragy, AuthenticatedMiddleware]
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Passport
    consumer
      .apply(passport.authenticate("fcp.integ01.dev-franceconnect.fr", {}))
      .forRoutes({ path: "login", method: RequestMethod.GET });
    consumer
      .apply(
        passport.authenticate("fcp.integ01.dev-franceconnect.fr", {
          callback: true,
          successRedirect: "/demarches/inscription-en-creche/revenus"
        } as any)
      )
      .forRoutes("login-callback");
    consumer
      .apply(
        passport.authenticate("local", {
          successRedirect: "/demarches/inscription-en-creche/revenus"
        })
      )
      .forRoutes({ path: "login", method: RequestMethod.POST });
  }
}
