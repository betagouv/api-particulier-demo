import { Module } from "@nestjs/common";
import { ApiParticulierClient } from "./client";

@Module({
  providers: [ApiParticulierClient]
})
export class ApiParticulierModule {}
