import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class AuthenticatedMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (!req.isAuthenticated()) {
      res.status(401).send("Unauthorized");
    }
    next();
  }
}
