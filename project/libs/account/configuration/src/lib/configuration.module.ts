import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './application/application.config';
import mongoDbConfig from './mongodb/mongo.config';

const ENV_USERS_FILE_PATH = 'apps/account/account.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        applicationConfig,
        mongoDbConfig,
      ],
      envFilePath: ENV_USERS_FILE_PATH,
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ConfigurationModule {}
