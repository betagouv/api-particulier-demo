import { Controller, Get, Req, Res, Post } from "@nestjs/common";
import { NextService } from "@nestpress/next";
import { IncomingMessage, ServerResponse, get } from "http";
import { User } from "./authentication/user.decorator";
import { IncompleteProfile } from "./profile/profile";

@Controller()
export class AppController {
  constructor(private readonly next: NextService) {}

  @Get("/")
  index(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: IncompleteProfile
  ) {
    this.next.render("/index", { user }, req, res);
  }

  @Get("/faq")
  faq(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: IncompleteProfile
  ) {
    this.next.render("/faq", { user }, req, res);
  }

  @Get("/demarches")
  processes(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: IncompleteProfile
  ) {
    this.next.render("/processes", { user }, req, res);
  }

  @Get("/demarches/inscription-en-creche")
  crecheSignup(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: IncompleteProfile
  ) {
    this.next.render("/processes/creche-signup/connection", { user }, req, res);
  }
}
