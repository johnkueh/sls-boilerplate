import { createConnection, ConnectionOptions } from "typeorm";
import { Recipe } from "../data/entities/recipe";

export const createOrmConnection = () => {
  console.log(process.env);
  const ormConfig: ConnectionOptions = {
    type: process.env.TYPEORM_TYPE,
    port: process.env.TYPEORM_PORT!,
    host: process.env.TYPEORM_HOST!,
    database: process.env.TYPEORM_DATABASE!,
    synchronize: process.env.TYPEORM_SYNCHRONIZE!,
    logging: process.env.TYPEORM_LOGGING!,
    entities: [Recipe]
  };

  return createConnection(ormConfig);
};
