import { AuthenticationController } from "./authentication.controller";

const controller = new AuthenticationController();

describe("Authentication controller", () => {
  describe("when called on the loginWithFranceConnect route handler", () => {
    it("redirects to the FranceConnect authorize page", () => {
        const res = {
            redirect: jest.fn()
        }
        controller.loginWithFranceConnect(res);

        expect(res.)
    });
  });
});
