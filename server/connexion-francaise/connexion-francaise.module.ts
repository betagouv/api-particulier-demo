import { Module } from "@nestjs/common";
import { ConnexionFrancaiseService } from "./connexion-francaise.service";

@Module({
  providers: [ConnexionFrancaiseService],
  exports: [ConnexionFrancaiseService],
})
export class ConnexionFrancaiseModule {}
