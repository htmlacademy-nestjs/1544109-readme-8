import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './application/application.config';

const ENV_FILE_PATH = 'apps/blog/blog.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        applicationConfig,
      ],
      envFilePath: ENV_FILE_PATH
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ConfigurationModule {}
