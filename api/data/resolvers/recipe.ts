import { ID, ObjectType, Field, Resolver, Query, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Recipe } from "../entities/recipe";

@ObjectType()
export class RecipeType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@Resolver()
export class RecipeResolver {
  @Query(() => RecipeType)
  async recipe(@Arg("id") id: string) {
    const recipe = {
      id: id,
      title: "Recipe name",
      description: "Recipe description"
    };
    return recipe;
  }

  @Query(() => [RecipeType])
  async recipes() {
    return getConnection()
      .getRepository(Recipe)
      .find();
  }
}
