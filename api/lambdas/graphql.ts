import "reflect-metadata";
import { ApolloServer } from "apollo-server-lambda";
import { buildSchemaSync } from "type-graphql";
import { createConnection } from "typeorm";
import { RecipeResolver } from "../data/resolvers/recipe";

export const handler = new ApolloServer({
  introspection: true,
  playground: true,
  context: async ({ event, context }) => {
    return {
      connection: await createConnection()
    };
  },
  schema: buildSchemaSync({
    resolvers: [RecipeResolver]
  })
}).createHandler({
  cors: { origin: "*" }
});
