import { Controller, Get, Req, Res } from "@nestjs/common";
import { IncomingMessage, ServerResponse } from "http";

@Controller()
export class AuthenticationController {
  @Get("/croute")
  franceConnect(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    return "yolo";
  }
}
