import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Burger Station API')
    .setDescription('Documentación de la API para pedidos de hamburguesas 🍔')
    .setVersion('1.0')
    .addBearerAuth() // para rutas protegidas con JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // acceso en /api

  await app.listen(3000);
}
bootstrap();
