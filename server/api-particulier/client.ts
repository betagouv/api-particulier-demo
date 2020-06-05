import { Injectable } from "@nestjs/common";
import axios from "axios";
import _ from "lodash";
import { Profile } from "../../client/profile";

@Injectable()
export class ApiParticulierClient {
  async ping() {
    const response = await axios.get(
      "https://particulier-test.api.gouv.fr/api/ping",
      {
        headers: {
          "X-API-Key": "d7e9c9f4c3ca00caadde31f50fd4521a",
        },
      }
    );

    return response.data;
  }

  async getReferenceEarnings(noticeNumber: string, taxNumber: string) {
    try {
      const response = await axios.get(
        "https://particulier-test.api.gouv.fr/api/impots/svair",
        {
          params: {
            numeroFiscal: taxNumber,
            referenceAvis: noticeNumber,
          },
          headers: {
            "X-API-Key": "d7e9c9f4c3ca00caadde31f50fd4521a",
          },
        }
      );
      return parseInt(response.data.revenuFiscalReference);
    } catch (error) {
      throw error;
    }
  }

  async getFamilyComposition(cafNumber: string, zipCode: string) {
    const response = await axios.get(
      "https://particulier-test.api.gouv.fr/api/caf/famille",
      {
        params: {
          numeroAllocataire: cafNumber,
          codePostal: zipCode,
        },
        headers: {
          "X-API-Key": "d7e9c9f4c3ca00caadde31f50fd4521a",
        },
      }
    );
    const rawFamilyComposition = response.data;

    return {} as Profile;
  }
}
