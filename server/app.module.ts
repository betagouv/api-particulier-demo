import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from "@nestjs/common";
import { NextModule, NextMiddleware } from "@nestpress/next";
import { AppController } from "./app.controller";
import { AuthenticationModule } from "./authentication/authentication.module";
import passport from "passport";

@Module({
  imports: [NextModule, AuthenticationModule],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Passport
    consumer
      .apply(passport.authenticate("fcp.integ01.dev-franceconnect.fr", {}))
      .forRoutes("login");
    consumer
      .apply(
        passport.authenticate("fcp.integ01.dev-franceconnect.fr", {
          callback: true,
          successRedirect: "/"
        } as any)
      )
      .forRoutes("login-callback");

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
