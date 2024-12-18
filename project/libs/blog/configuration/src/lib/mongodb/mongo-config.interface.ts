export interface MongoConfig {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  authBase: string;
  validate(): Promise<void>;
}
