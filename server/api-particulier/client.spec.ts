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

  it("can get the family composition", async () => {
    const familyComposition = await client.getFamilyComposition(
      "0000001",
      "75001"
    );

    expect(familyComposition.quotient).toBe(200);
    expect(familyComposition.children[1].sex).toBe("female");
    expect(familyComposition.children[1].birthDate).toBe(
      new Date("12-23-2008")
    );
  });
});
