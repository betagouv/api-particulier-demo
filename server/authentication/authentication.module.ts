import { Module } from "@nestjs/common";
import { LocalStragy } from "./local.strategy";
import { AuthenticationController } from "./authentication.controller";

@Module({
  controllers: [AuthenticationController],
  providers: [LocalStragy]
})
export class AuthenticationModule {}
