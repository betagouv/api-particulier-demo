import { Controller, Get, Req, Redirect } from "@nestjs/common";
import { Request } from "express";

@Controller()
export class AuthenticationController {
  @Get("logout")
  @Redirect("/")
  logout(@Req() req: Request) {
    req.logOut();
  }
}
