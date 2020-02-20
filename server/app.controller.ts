import { Controller, Get, Req, Res } from "@nestjs/common";
import { NextService } from "@nestpress/next";
import { IncomingMessage, ServerResponse, get } from "http";

@Controller()
export class AppController {
  constructor(private readonly next: NextService) {}

  @Get("/")
  index(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    this.next.render("/index", req, res);
  }

  @Get("/faq")
  faq(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    this.next.render("/faq", req, res);
  }

  @Get("/demarches")
  processes(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    this.next.render("/processes", req, res);
  }

  @Get("/demarches/inscription-en-creche")
  crecheSignup(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    this.next.render("/processes/creche-signup", req, res);
  }
}
