import { ConfigType, registerAs } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { DEFAULT_MONGO_PORT } from './mongo.constant';
import { MongoConfiguration } from './mongo.env';

export interface MongoConfig {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  authBase: string;
}

const getDBConfig = async (): Promise<MongoConfiguration> => {
  const config = plainToClass(MongoConfiguration, {
    name: process.env['ACCOUNT_MONGO_DB'],
    host: process.env['ACCOUNT_MONGO_HOST'],
    port: process.env['ACCOUNT_MONGO_PORT'] ? parseInt(process.env['ACCOUNT_MONGO_PORT'], 10) : DEFAULT_MONGO_PORT,
    user: process.env['ACCOUNT_MONGO_USER'],
    password: process.env['ACCOUNT_MONGO_PASSWORD'],
    authBase: process.env['ACCOUNT_MONGO_AUTH_BASE'],
  });

  await config.validate();

  return config;
}

export default registerAs('db', async (): Promise<ConfigType<typeof getDBConfig>> => {
  return getDBConfig();
});

