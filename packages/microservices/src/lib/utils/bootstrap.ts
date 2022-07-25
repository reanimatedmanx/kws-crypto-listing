import { Logger } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

/**
 * Initializes a preconfigured nest.js microservice.
 */
export async function bootstrap(
  name: string,
  {
    appModule,
    port,
    version = '0.0.1',
    description = '',
    globalPrefix = 'api',
  }: {
    appModule: unknown;
    port: number;
    version?: string;
    description?: string;
    globalPrefix?: string;
  }
) {
  const app = await NestFactory.create<NestFastifyApplication>(
    appModule,
    new FastifyAdapter()
  );
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application [${name}@${version}] is running on: http://localhost:${port}/${globalPrefix}`
  );
}
