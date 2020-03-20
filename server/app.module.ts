import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from "@nestjs/common";
import { NextModule, NextMiddleware } from "@nestpress/next";
import passport from "passport";
import { AuthenticationModule } from "./authentication/authentication.module";
import { FranceConnectModule } from "./france-connect/france-connect.module";
import { FrontendModule } from "./frontend/frontend.module";

@Module({
  imports: [
    NextModule,
    AuthenticationModule,
    FranceConnectModule,
    FrontendModule
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Passport
    consumer
      .apply(passport.authenticate("fcp.integ01.dev-franceconnect.fr", {}))
      .forRoutes({ path: "login", method: RequestMethod.GET });
    consumer
      .apply(
        passport.authenticate("fcp.integ01.dev-franceconnect.fr", {
          callback: true,
          successRedirect: "/"
        } as any)
      )
      .forRoutes("login-callback");
    consumer
      .apply(
        passport.authenticate("local", {
          successRedirect: "/demarches/inscription-en-creche/connexion"
        })
      )
      .forRoutes({ path: "login", method: RequestMethod.POST });

    // handle scripts
    consumer.apply(NextMiddleware).forRoutes({
      path: "_next*",
      method: RequestMethod.GET
    });

    // handle other assets
    consumer.apply(NextMiddleware).forRoutes({
      path: "images/*",
      method: RequestMethod.GET
    });

    consumer.apply(NextMiddleware).forRoutes({
      path: "favicon.ico",
      method: RequestMethod.GET
    });
  }
}
