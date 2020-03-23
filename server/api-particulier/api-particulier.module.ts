import { Module } from "@nestjs/common";
import { ApiParticulierClient } from "./client";

@Module({
  providers: [ApiParticulierClient],
  exports: [ApiParticulierClient]
})
export class ApiParticulierModule {}
