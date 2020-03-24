import { Controller, Get, Req, Post } from "@nestjs/common";
import { ApiParticulierClient } from "../api-particulier/client";
import { Request } from "express";
import { User } from "../authentication/user.decorator";
import { IncompleteProfile } from "../../client/profile";

@Controller("/api")
export class ApiController {
  constructor(private readonly apiParticulierClient: ApiParticulierClient) {}

  @Get("/reference-earnings")
  async getReferenceEarnings(
    @Req() req: Request,
    @User() user: IncompleteProfile
  ) {
    const { taxNumber, noticeNumber } = req.query;

    if (!taxNumber || !noticeNumber) {
      throw new Error("Missing required parameters");
    }

    const referenceEarnings = await this.apiParticulierClient.getReferenceEarnings(
      noticeNumber,
      taxNumber
    );

    user.earnings = referenceEarnings;

    return referenceEarnings;
  }

  @Post("/reference-earnings/confirm")
  confirmReferenceEarnings(@User() user: IncompleteProfile) {
    user.earningsConfirmed = true;
    return;
  }

  @Post("/tax-notice")
  uploadTaxNotice(@User() user: IncompleteProfile) {
    delete user.earnings;
    user.earningsProofUploaded = true;
    return;
  }

  @Get("/family-composition")
  async getFamilyComposition(
    @Req() req: Request,
    @User() user: IncompleteProfile
  ) {
    const { cafNumber, zipCode } = req.query;

    if (!cafNumber || !zipCode) {
      throw new Error("Missing required parameters");
    }

    const familyComposition = await this.apiParticulierClient.getFamilyComposition(
      cafNumber,
      zipCode
    );

    user.familyComposition = familyComposition;

    return familyComposition;
  }

  @Post("/family-composition")
  async uploadFamilyCompositionProof(@User() user: IncompleteProfile) {
    delete user.familyComposition;
    user.familyCompositionProofUploaded = true;
    return;
  }

  @Post("/family-composition/confirm")
  confirmFamilyComposition(@User() user: IncompleteProfile) {
    user.familyCompositionConfirmed = true;
    return;
  }
}
