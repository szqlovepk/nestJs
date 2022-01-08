import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //配置swagger
  const config = new DocumentBuilder()
    .setTitle('nest swagger')
    .setDescription('nest swagger description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swaggerApi', app, document);

  await app.listen(3000);

  console.log(`http://localhost:${port}/`);
  console.log(`http://localhost:${port}/swaggerApi`);
}
bootstrap();
