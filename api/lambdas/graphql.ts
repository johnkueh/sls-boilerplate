import "reflect-metadata";
import { ApolloServer } from "apollo-server-lambda";
import { buildSchemaSync } from "type-graphql";
import { RecipeResolver } from "../entities/recipe";

export const handler = new ApolloServer({
  introspection: true,
  playground: true,
  schema: buildSchemaSync({
    resolvers: [RecipeResolver]
  })
}).createHandler({
  cors: { origin: "*" }
});
