import { Module } from "@nestjs/common";
import { DGFIPClient } from "./dgfip.client";
import { FranceConnectService } from "./france-connect.service";

@Module({
  providers: [DGFIPClient, FranceConnectService],
  exports: [DGFIPClient, FranceConnectService]
})
export class FranceConnectModule {}
