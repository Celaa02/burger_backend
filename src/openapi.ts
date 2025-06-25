import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';

async function generateOpenAPISpec() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Burger API')
    .setDescription('Documentación de la API para Burger App')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Guardar como archivo JSON
  writeFileSync('./burger-api-doc.json', JSON.stringify(document, null, 2));

  console.log('✅ Archivo burger-api-doc.json generado correctamente.');
  await app.close();
}

generateOpenAPISpec();
