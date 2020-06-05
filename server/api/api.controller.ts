import { Controller, Get, Req, Post } from "@nestjs/common";
import { Request } from "express";
import { User } from "../authentication/user.decorator";
import { Profile } from "../../client/profile";
import { ConnexionFrancaiseService } from "../connexion-francaise/connexion-francaise.service";

@Controller("/api")
export class ApiController {
  constructor(
    private readonly connexionFrancaiseService: ConnexionFrancaiseService
  ) {}

  @Get("/mon-compte-formation")
  async getMonCompteFormation(@Req() req: Request, @User() user: Profile) {
    return this.connexionFrancaiseService.getMonCompteFormation(
      user.username,
      user.password
    );
  }

  @Get("/telepoints")
  async getTelepoints(@Req() req: Request, @User() user: Profile) {
    return 304;
  }
}
