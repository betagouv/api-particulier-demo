import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from "@nestjs/common";
import { NextModule, NextMiddleware } from "@nestpress/next";
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
