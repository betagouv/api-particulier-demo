import { Module } from "@nestjs/common";
import { LocalStragy } from "./local.strategy";

@Module({
  providers: [LocalStragy]
})
export class AuthenticationModule {}
