import { createConnection } from "typeorm";
import { Recipe } from "../data/entities/recipe";

export const createOrmConnection = () => {
  const entities = [Recipe];

  if (process.env.STAGE === "production") {
    return createConnection({
      type: process.env.TYPEORM_TYPE,
      database: process.env.TYPEORM_DATABASE!,
      secretArn: process.env.TYPEORM_AURORA_SECRET_ARN!,
      resourceArn: process.env.TYPEORM_AURORA_RESOURCE_ARN!,
      region: process.env.TYPEORM_AURORA_REGION!,
      synchronize: true,
      logging: true
      entities
    });
  }

  return createConnection({
    type: process.env.TYPEORM_TYPE,
    port: process.env.TYPEORM_PORT!,
    host: process.env.TYPEORM_HOST!,
    database: process.env.TYPEORM_DATABASE!,
    synchronize: process.env.TYPEORM_SYNCHRONIZE!,
    logging: process.env.TYPEORM_LOGGING!,
    entities
  });
};
