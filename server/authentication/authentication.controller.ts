import { Controller, Get, Req, Res, Post } from "@nestjs/common";
import { IncomingMessage, ServerResponse } from "http";

@Controller()
export class AuthenticationController {
  @Post("/login")
  login(@Req() req: any) {
    return req.user;
  }
}
