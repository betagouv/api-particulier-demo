import { Module } from "@nestjs/common";
import { FrontendController } from "./frontend.controller";
import { FrontendRouter } from "./frontend.router";
import { NextModule } from "@nestpress/next";

@Module({
  imports: [NextModule],
  controllers: [FrontendController],
  providers: [FrontendRouter]
})
export class FrontendModule {}
