import { Controller, Get, Req, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { NextService } from "@nestpress/next";
import { IncomingMessage, ServerResponse } from "http";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly next: NextService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/home")
  showHome(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    this.next.render("/index", req, res);
  }
}
