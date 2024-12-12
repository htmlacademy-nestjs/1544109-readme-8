interface MongoConfig {
  userName: string,
  password: string;
  host: string;
  port: number;
  databaseName: string;
  authDatabase: string;
}

export const getMongoConnectionString = ({userName, password, host, port, databaseName, authDatabase}: MongoConfig ): string => {
  return `mongodb://${userName}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
