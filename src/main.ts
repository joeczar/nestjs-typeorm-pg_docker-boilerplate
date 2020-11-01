
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { getIp } from './utils/getIp';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.setGlobalPrefix('zen-api');
app.use(cookieParser());

const configService = app.get(ConfigService);
const port = configService.get('PORT');
const [eth0] = getIp().eth0;

await app.listen(port);

console.log(`App listening on http://${eth0}:${port}`);

}
bootstrap();
