import { plainToClass } from 'class-transformer'
import { MongoConfiguration } from './mongo.env'
import { DEFAULT_MONGO_PORT } from './mongo.constant'
import { ConfigType, registerAs } from '@nestjs/config';

const getDBConfig = async (): Promise<MongoConfiguration> => {
  const config = plainToClass(MongoConfiguration, {
    name: process.env['BLOG_MONGO_DB'],
    host: process.env['BLOG_MONGO_HOST'],
    port: process.env['BLOG_MONGO_PORT'] ? parseInt(process.env['BLOG_MONGO_PORT'], 10) : DEFAULT_MONGO_PORT,
    user: process.env['BLOG_MONGO_USER'],
    password: process.env['BLOG_MONGO_PASSWORD'],
    authBase: process.env['BLOG_MONGO_AUTH_BASE'],
  });

  await config.validate();

  return config;
}

export default registerAs('db', async (): Promise<ConfigType<typeof getDBConfig>> => {
  return getDBConfig();
})
