import { plainToClass } from 'class-transformer';
import { Environment } from './environment.enum';
import { ApplicationConfiguration } from './application.env';
import { ConfigType, registerAs } from '@nestjs/config';
import { DEFAULT_APPLICATION_PORT } from './application.constant';

export interface ApplicationConfig {
  environment: Environment;
  port: number;
}

const getApplicationConfig = async (): Promise<ApplicationConfig> => {
  const config = plainToClass(ApplicationConfiguration, {
    environment: process.env['NODE_ENV'],
    port: process.env['ACCOUNT_APPLICATION_PORT'] ? parseInt(process.env['ACCOUNT_APPLICATION_PORT'], 10) : DEFAULT_APPLICATION_PORT,
  });

  await config.validate();

  return config;
}

export default registerAs('app', async (): Promise<ConfigType<typeof getApplicationConfig>> => {
  return getApplicationConfig();
})
