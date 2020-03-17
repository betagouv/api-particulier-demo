import { Injectable } from "@nestjs/common";
import { Issuer, Strategy, Client } from "openid-client";
import { Profile } from "./types";
import { FranceConnectService } from "./france-connect.service";
import passport from "passport";

@Injectable()
export class FranceConnectStrategy extends Strategy<Profile, Client> {
  constructor(franceConnectService: FranceConnectService) {
    const issuer = new Issuer({
      issuer: "https://fcp.integ01.dev-franceconnect.fr",
      authorization_endpoint:
        "https://fcp.integ01.dev-franceconnect.fr/api/v1/authorize",
      token_endpoint: "https://fcp.integ01.dev-franceconnect.fr/api/v1/token",
      userinfo_endpoint:
        "https://fcp.integ01.dev-franceconnect.fr/api/v1/userinfo",
      token_endpoint_auth_methods_supported: ["client_secret_post"]
    });
    const client = new issuer.Client({
      client_id:
        "211286433e39cce01db448d80181bdfd005554b19cd51b3fe7943f6b3b86ab6e",
      client_secret:
        "2791a731e6a59f56b6b4dd0d08c9b1f593b5f3658b9fd731cb24248e2669af4b",
      redirect_uris: ["http://localhost:3000/login-callback"],
      id_token_signed_response_alg: "HS256"
    });

    super(
      {
        client,
        params: {
          nonce: "yolo",
          scope: "openid identite_pivot dgfip_rfr"
        }
      },
      franceConnectService.enrichProfileWithFranceConnectAPIs.bind(
        franceConnectService
      )
    );

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      done(null, user);
    });
    passport.use(this);
  }
}
