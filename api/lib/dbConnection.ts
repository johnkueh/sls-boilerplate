import { createConnection, ConnectionOptions } from "typeorm";
import { Recipe } from "../data/entities/recipe";

export const createOrmConnection = () => {
  const ormConfig: ConnectionOptions = {
    type: "postgres",
    port: 5432,
    host: process.env.TYPEORM_HOST!,
    database: process.env.TYPEORM_DATABASE!,
    entities: [Recipe],
    synchronize: true,
    logging: true
  };

  return createConnection(ormConfig);
};
