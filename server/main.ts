import { NestFactory } from "@nestjs/core";
import { NextModule } from "@nestpress/next";
import passport from "passport";
import session from "express-session";

import { AppModule } from "./app.module";

require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Session
  app.use(
    session({
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: true
    })
  );

  // Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Next
  await app.get(NextModule).prepare({
    dir: "./client"
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
