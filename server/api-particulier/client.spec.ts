import { ApiParticulierClient } from "./client";

describe("The API Particulier client", () => {
  const client = new ApiParticulierClient();

  it("can ping the whole API", async () => {
    const pong = await client.ping();

    expect(pong).toBe("pong");
  });

  it("can get the reference earnings", async () => {
    const earnings = await client.getReferenceEarnings(
      "1902599999001",
      "1902599999001"
    );
    expect(earnings).toBe(26922);
  });
});
