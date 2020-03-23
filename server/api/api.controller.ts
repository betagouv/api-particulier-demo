import { Controller, Get, Req } from "@nestjs/common";
import { ApiParticulierClient } from "../api-particulier/client";
import { Request } from "express";

@Controller("/api")
export class ApiController {
  constructor(private readonly apiParticulierClient: ApiParticulierClient) {}

  @Get("/reference-earnings")
  getReferenceEarnings(@Req() req: Request) {
    const { taxNumber, noticeNumber } = req.params;

    if (!taxNumber || !noticeNumber) {
      throw new Error("Missing required parameters");
    }

    return this.apiParticulierClient.getReferenceEarnings(
      noticeNumber,
      taxNumber
    );
  }
}
