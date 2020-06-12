import { FranceConnectAccessToken } from "./types";
import axios from "axios";
import qs from "querystring";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DGFIPClient {
  async getReferenceEarnings(
    fcAccessToken: FranceConnectAccessToken
  ): Promise<number> {
    try {
      const {
        data: { access_token },
      } = await axios.post(
        `${process.env.DGFIP_API_HOST}/token`,
        qs.stringify({
          grant_type: "client_credentials",
          scope: "RessourceIR",
        }),
        {
          auth: {
            username: process.env.DGFIP_API_CLIENT_ID as string,
            password: process.env.DGFIP_API_CLIENT_SECRET as string,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("ACCESS TOKEN", access_token);
      const response = await axios.get(
        `${process.env.DGFIP_API_HOST}/impotparticulier/1.0/situations/ir/assiettes/annrev/2018` as string,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "X-FranceConnect-OAuth": fcAccessToken,
            "X-Correlation-ID": "56e1832a-a0b4-48e0-94f1-d0e6790ffea5",
          },
        }
      );
      return parseInt(response.data.rfr);
    } catch (err) {
      console.log(err);
      console.error(err.response.data.erreur);
      throw err;
    }
  }
}
