import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import config from './config';
import connectionBootstrap from './config/connections';

async function bootstrap() {
    await connectionBootstrap();
    
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    
    await app.listen(config.api.port, () => {
        console.log(`Server is running on port ${config.api.port}`);
    });
}

bootstrap();
