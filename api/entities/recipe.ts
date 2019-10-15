import { ID, ObjectType, Field, Resolver, Query, Arg } from "type-graphql";

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@Resolver()
export class RecipeResolver {
  @Query(() => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = {
      id: id,
      title: "Recipe name",
      description: "Recipe description"
    };
    return recipe;
  }
}
