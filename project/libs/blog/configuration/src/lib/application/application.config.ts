import { ConfigType, registerAs } from '@nestjs/config';
import { DEFAULT_PORT } from './application.constant';
import { ApplicationConfiguration } from './application.env';
import { Environment } from './environment.enum';
import { plainToClass } from 'class-transformer';

export interface ApplicationConfig {
  environment: Environment;
  port: number;
}

const getApplicationConfig = async (): Promise<ApplicationConfig> => {
  const config = plainToClass(ApplicationConfiguration, {
    environment: process.env['NODE_ENV'],
    port: process.env['BLOG_APPLICATION_PORT'] ? parseInt(process.env['BLOG_APPLICATION_PORT'], 10) : DEFAULT_PORT
  });

  await config.validate();

  return config;
}

export default registerAs('app', async (): Promise<ConfigType<typeof getApplicationConfig>> => {
  return getApplicationConfig();
})
