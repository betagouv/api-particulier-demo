import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { AuthenticatedMiddleware } from "../authentication/authenticated.middleware";
import { ApiParticulierModule } from "../api-particulier/api-particulier.module";

@Module({
  imports: [ApiParticulierModule],
  controllers: [ApiController]
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticatedMiddleware).forRoutes(ApiController);
  }
}
