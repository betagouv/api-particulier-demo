import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { ProfileRouter } from "./profile.router";

@Module({
  providers: [ProfileRouter],
  controllers: [ProfileController]
})
export class ProfileModule {}
