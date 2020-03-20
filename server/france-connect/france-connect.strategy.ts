import { Injectable } from "@nestjs/common";
import { Issuer, Strategy, Client } from "openid-client";
import { FranceConnectService } from "./france-connect.service";
import passport from "passport";
import { EarningsCompletedProfile } from "../../client/profile";

@Injectable()
export class FranceConnectStrategy extends Strategy<
  EarningsCompletedProfile,
  Client
> {
  constructor(franceConnectService: FranceConnectService) {
    const issuer = new Issuer({
      issuer: process.env.FC_ISSUER as string,
      authorization_endpoint: process.env.FC_AUTHORIZATION_ENDPOINT as string,
      token_endpoint: process.env.FC_TOKEN_ENDPOINT as string,
      userinfo_endpoint: process.env.FC_USERINFO_ENDPOINT as string,
      token_endpoint_auth_methods_supported: ["client_secret_post"]
    });
    const client = new issuer.Client({
      client_id: process.env.FC_CLIENT_ID as string,
      client_secret: process.env.FC_CLIENT_SECRET as string,
      redirect_uris: [process.env.FC_REDIRECT_URI as string],
      id_token_signed_response_alg: "HS256"
    });

    super(
      {
        client,
        params: {
          nonce: "yolo",
          scope: "openid gender given_name family_name birthdate dgfip_rfr"
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
