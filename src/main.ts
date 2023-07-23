import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const envTest = configService.get('test');
  console.log(`This should print FOO: ${envTest}`);

  await app.listen(3000);
}
bootstrap();
