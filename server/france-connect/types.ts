import { UserinfoResponse } from "openid-client";

export type FranceConnectIdToken = string;
export type FranceConnectAccessToken = string;

export type User = UserinfoResponse;

export type Profile = {
  user: User;
  referenceEarnings: number;
};
