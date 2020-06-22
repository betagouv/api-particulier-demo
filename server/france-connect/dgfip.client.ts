import { FranceConnectAccessToken } from "./types";
import axios from "axios";
import qs from "querystring";
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class DGFIPClient {
  async getReferenceEarnings(
    fcAccessToken: FranceConnectAccessToken
  ): Promise<number | undefined> {
    try {
      const {
        data: { access_token },
      } = await axios.post(
        `${process.env.DGFIP_API_HOST}/token`,
        qs.stringify({
          grant_type: "client_credentials",
          scope: "RessourceIR RessourceTHPrincipale",
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
      const response = await axios.get(
        `${process.env.DGFIP_API_HOST}/impotparticulier/1.0/situations/ir/assiettes/annrev/2018` as string,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "X-FranceConnect-OAuth": fcAccessToken,
            "X-Correlation-ID": uuidv4(),
            ID_teleservice: process.env.DGFIP_ID_TELESERVICE,
          },
        }
      );
      return parseInt(response.data.rfr);
    } catch (err) {
      console.error(err.response);
      return;
    }
  }
}
