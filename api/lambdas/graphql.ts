import "reflect-metadata";
import { ApolloServer } from "apollo-server-lambda";
import { buildSchemaSync } from "type-graphql";
import { RecipeResolver } from "../data/resolvers/recipe";
import { createOrmConnection } from "../lib/dbConnection";

export const handler = new ApolloServer({
  introspection: true,
  playground: true,
  context: async () => {
    const connection = await createOrmConnection();
    return {
      connection
    };
  },
  schema: buildSchemaSync({
    resolvers: [RecipeResolver]
  })
}).createHandler({
  cors: { origin: "*" }
});
