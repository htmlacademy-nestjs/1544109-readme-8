import { ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

import { getMongoConnectionString } from '@project/shared/helpers';

export const getMongooseOptions = (): MongooseModuleAsyncOptions => {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          userName: config.get<string>('db.user')!,
          password: config.get<string>('db.password')!,
          host: config.get<string>('db.host')!,
          port: config.get<number>('db.port')!,
          databaseName: config.get<string>('db.name')!,
          authDatabase: config.get<string>('db.authBase')!,
        }),
      };
    },
    inject: [ConfigService],
  };
};
