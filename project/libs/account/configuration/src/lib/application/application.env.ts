import { IsEnum, IsNumber, IsOptional, Max, Min, validateOrReject } from 'class-validator';
import { DEFAULT_APPLICATION_PORT } from './application.constant'
import { MIN_PORT, MAX_PORT } from '../mongodb/mongo.constant';
import { ApplicationValidationMessage } from './application-validation-message.enum';
import { Environment } from './environment.enum';

export class ApplicationConfiguration {
  @IsEnum(Environment, { message: ApplicationValidationMessage.AppEnvironmentRequired })
  environment!: Environment;

  @IsNumber({}, { message: ApplicationValidationMessage.ApplicationPortRequired })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  @IsOptional()
  port: number = DEFAULT_APPLICATION_PORT;

  async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
