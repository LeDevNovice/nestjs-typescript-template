import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
// import { configureApp } from './configure-app';
import { EnvironmentVariablesDto } from './config/dto/config.dto';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService =
    app.get<ConfigService<EnvironmentVariablesDto, true>>(ConfigService);

  // configureApp(app, configService);

  const port = configService.getOrThrow('APP_PORT', { infer: false });
  const host = configService.get('APP_HOST', { infer: false });

  await app.listen(port, host);
}
bootstrap();
