import { FranceConnectAccessToken } from "./types";
import axios from "axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DGFIPClient {
  async getReferenceEarnings(
    accessToken: FranceConnectAccessToken
  ): Promise<number> {
    try {
      const response = await axios.get(
        "https://fournisseur-de-donnees.dev-franceconnect.fr/situations/ir/assiettes/annrev/2018",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      return parseInt(response.data.rfr);
    } catch (err) {
      throw err;
    }
  }
}
