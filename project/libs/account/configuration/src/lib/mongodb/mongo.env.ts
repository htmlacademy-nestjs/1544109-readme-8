import { IsNumber, IsOptional, IsString, Max, Min, validateOrReject } from 'class-validator';
import { MongoValidationMessage } from './mongo-validation-message.enum';
import { DEFAULT_MONGO_PORT, MAX_PORT, MIN_PORT } from './mongo.constant';
import { MongoConfig } from './mongo-config.interface';

export class MongoConfiguration implements MongoConfig{
  @IsString({ message: MongoValidationMessage.DBNameRequired })
  name!: string;

  @IsString({ message: MongoValidationMessage.DBHostRequired })
  host!: string;

  @IsNumber({}, { message: MongoValidationMessage.DBPortRequired })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  @IsOptional()
  port: number = DEFAULT_MONGO_PORT;

  @IsString({ message: MongoValidationMessage.DBUserRequired })
  user!: string;

  @IsString({ message: MongoValidationMessage.DBPasswordRequired })
  password!: string;

  @IsString({ message: MongoValidationMessage.DBBaseAuthRequired })
  authBase!: string;

  async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
