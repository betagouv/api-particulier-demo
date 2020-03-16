import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { LocalStragy } from "./local.strategy";

@Module({
  providers: [LocalStragy],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
