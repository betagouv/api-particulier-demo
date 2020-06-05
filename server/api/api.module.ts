import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { AuthenticatedMiddleware } from "../authentication/authenticated.middleware";
import { ApiParticulierModule } from "../api-particulier/api-particulier.module";
import { ConnexionFrancaiseModule } from "../connexion-francaise/connexion-francaise.module";

@Module({
  imports: [ApiParticulierModule, ConnexionFrancaiseModule],
  controllers: [ApiController],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticatedMiddleware).forRoutes(ApiController);
  }
}
