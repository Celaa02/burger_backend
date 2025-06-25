import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // HABILITAR CORS
  app.enableCors({
    origin: 'https://main.d1vclgui4mrj1.amplifyapp.com',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
