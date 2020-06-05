import { Controller, Get, Req, Res, Param } from "@nestjs/common";
import { Response } from "express";
import { NextService } from "@nestpress/next";
import { IncomingMessage, ServerResponse } from "http";
import { User } from "../authentication/user.decorator";
import { Profile } from "../../client/profile";
import { Step } from "./steps";
import { FrontendRouter } from "./frontend.router";

@Controller()
export class FrontendController {
  private readonly routesConfiguration: { [key: string]: Step } = {
    connexion: "Connection",
    resume: "Summary",
  };

  private readonly routesTranslations = {
    Connection: "connexion",
    Summary: "resume",
  };

  private readonly templatesRouting = {
    Connection: "connection",
    Summary: "summary",
  };

  constructor(
    private readonly next: NextService,
    private readonly router: FrontendRouter
  ) {}

  @Get("/")
  index(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: Profile
  ) {
    this.next.render("/index", { user }, req, res);
  }

  @Get("/faq")
  faq(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: Profile
  ) {
    this.next.render("/faq", { user }, req, res);
  }

  @Get("/demarches")
  processes(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @User() user: Profile
  ) {
    this.next.render("/processes", { user }, req, res);
  }

  @Get("/demarches/enregistrement-perimetre-iso-citoyen/:step")
  crecheSignup(
    @Req() req: IncomingMessage,
    @Res() res: Response,
    @User() user: Profile,
    @Param("step") step: string
  ) {
    const parsedStep = this.routesConfiguration[step];
    if (!parsedStep) {
      return res.redirect("/");
    }

    const redirectUri = this.router.getNextStepUri(user, parsedStep);

    if (redirectUri) {
      return res.redirect(
        `/demarches/enregistrement-perimetre-iso-citoyen/${this.routesTranslations[redirectUri]}`
      );
    }

    this.next.render(
      `/processes/enregistrement-perimetre-iso-citoyen/${this.templatesRouting[parsedStep]}`,
      { user },
      req,
      res
    );
  }
}
