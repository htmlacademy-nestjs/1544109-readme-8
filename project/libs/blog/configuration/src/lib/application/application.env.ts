import { IsEnum, IsNumber, IsOptional, Max, Min, validateOrReject } from 'class-validator';

import { ApplicationValidationMessage } from './application-validation-message.enum';
import { DEFAULT_PORT, MAX_PORT, MIN_PORT } from './application.constant';
import { Environment } from './environment.enum';

export class ApplicationConfiguration {
  @IsEnum(Environment, {message: ApplicationValidationMessage.AppEnvironmentRequired})
  environment!: Environment;

  @IsNumber({}, { message: ApplicationValidationMessage.ApplicationPortRequired })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  @IsOptional()
  port: number = DEFAULT_PORT;

  async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
