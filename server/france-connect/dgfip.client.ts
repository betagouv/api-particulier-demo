import { FranceConnectAccessToken } from "./types";
import axios from "axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DGFIPClient {
  async getReferenceEarnings(
    accessToken: FranceConnectAccessToken
  ): Promise<number> {
    try {
      const response = await axios.get(process.env.DGFIP_API_HOST as string, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return parseInt(response.data.rfr);
    } catch (err) {
      throw err;
    }
  }
}
