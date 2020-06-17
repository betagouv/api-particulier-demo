import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { DGFIPClient } from "./dgfip.client";
import { FranceConnectAccessToken } from "./types";

const mock = new MockAdapter(axios);

describe("DGFIP Client", () => {
  const client = new DGFIPClient();

  describe("getReferenceEarnings", () => {
    it("calls the DGFIP API with the provided token", async () => {
      const idToken: FranceConnectAccessToken = "yolo";
      mock.onPost().reply(200, { access_token: "the token" });
      mock.onGet().reply(200, { rfr: "12345" });
      const referenceEarnings = await client.getReferenceEarnings(idToken);

      expect(referenceEarnings).toBe(12345);
      expect(mock.history.get.length).toBe(1);
      expect(mock.history.get[0].headers.Authorization).toBe(
        "Bearer the token"
      );
    });
  });
});
