import { Module } from "@nestjs/common";
import { DGFIPClient } from "./dgfip.client";
import { FranceConnectService } from "./france-connect.service";
import { FranceConnectStrategy } from "./france-connect.strategy";

@Module({
  providers: [DGFIPClient, FranceConnectService, FranceConnectStrategy],
  exports: [DGFIPClient, FranceConnectService]
})
export class FranceConnectModule {}
