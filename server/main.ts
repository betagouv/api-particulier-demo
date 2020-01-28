import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NextModule } from "@nestpress/next";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Next
  await app.get(NextModule).prepare({
    dir: "./client"
  });

  await app.listen(3000);
}
bootstrap();
