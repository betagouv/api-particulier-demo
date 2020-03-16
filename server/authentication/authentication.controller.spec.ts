import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../app.module";
import passport from "passport";

describe("AuthenticationController", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    app.use(passport.initialize());
    await app.init();
  });
  describe("when call with a POST to the /login route", () => {
    it("authenticates the user if the credentials are correct", () => {
      return request(app.getHttpServer())
        .post("/login")
        .send({
          username: "georges",
          password: "moustaki"
        })
        .expect(201)
        .expect({
          name: "georges",
          surname: "moustaki"
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
