import { Controller, Get, Req, Res, Post, Param } from "@nestjs/common";
import { Response } from "express";
import { NextService } from "@nestpress/next";
import { IncomingMessage, ServerResponse, get } from "http";
import { User } from "../authentication/user.decorator";
import { IncompleteProfile } from "../../client/profile";
import { Step } from "./steps";
import { FrontendRouter } from "./frontend.router";

@Controller()
export class FrontendController {
  private readonly routesConfiguration: { [key: string]: Step } = {
    connexion: "Connection",
    revenus: "Earnings",
    famille: "FamilySituation"
  };

  private readonly routesTranslations = {
    Connection: "connexion",
    Earnings: "revenus",
    FamilySituation: "famille"
  };

  private readonly templatesRouting = {
    Connection: "connection",
    Earnings: "earnings",
    FamilySituation: "family"
  };

  constructor(
    private readonly next: NextService,
    private readonly router: FrontendRouter
  ) {}

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

  @Get("/demarches/inscription-en-creche/:step")
  crecheSignup(
    @Req() req: IncomingMessage,
    @Res() res: Response,
    @User() user: IncompleteProfile,
    @Param("step") step: string
  ) {
    const parsedStep = this.routesConfiguration[step];
    if (!parsedStep) {
      return res.redirect("/");
    }

    const redirectUri = this.router.getNextStepUri(user, parsedStep);

    if (redirectUri) {
      return res.redirect(
        `/demarches/inscription-en-creche/${this.routesTranslations[redirectUri]}`
      );
    }

    this.next.render(
      `/processes/creche-signup/${this.templatesRouting[parsedStep]}`,
      { user },
      req,
      res
    );
  }
}
