import { Module } from "@nestjs/common";
import { DGFIPClient } from "./dgfip.client";

@Module({
  providers: [DGFIPClient],
  exports: [DGFIPClient]
})
export class ProfileModule {}
