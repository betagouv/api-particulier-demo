import { IdToken } from "../authentication/types";
import axios from "axios";

export class DGFIPClient {
  async getReferenceEarnings(idToken: IdToken): Promise<number> {
    try {
      const response = await axios.get(
        "https://fournisseur-de-donnees.dev-franceconnect.fr/situations/ir/assiettes/annrev/2018",
        {
          headers: {
            Authorization: `Bearer ${idToken}`
          }
        }
      );
      return parseInt(response.data.rfr);
    } catch (err) {
      throw err;
    }
  }
}
