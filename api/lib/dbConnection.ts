import { createConnection, ConnectionOptions } from "typeorm";
import entities from "../data/entities";

export const createOrmConnection = () => {
  const ormConfig: ConnectionOptions = {
    type: "postgres",
    port: 5432,
    host: process.env.TYPEORM_HOST!,
    database: process.env.TYPEORM_DATABASE!,
    entities,
    synchronize: true,
    logging: true
  };

  return createConnection(ormConfig);
};
