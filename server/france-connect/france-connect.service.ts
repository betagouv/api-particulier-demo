import { Injectable } from "@nestjs/common";
import { Profile } from "./types";
import { StrategyVerifyCallbackUserInfo } from "openid-client";
import { DGFIPClient } from "./dgfip.client";

@Injectable()
export class FranceConnectService {
  constructor(private readonly dgfipClient: DGFIPClient) {}

  enrichProfileWithFranceConnectAPIs: StrategyVerifyCallbackUserInfo<
    Profile
  > = async (tokenSet, user, loginCallback) => {
    if (tokenSet.access_token === undefined) {
      throw new Error("Access token must be set");
    }

    const referenceEarnings = await this.dgfipClient.getReferenceEarnings(
      tokenSet.access_token
    );

    loginCallback(null, {
      user,
      referenceEarnings
    });
  };
}
