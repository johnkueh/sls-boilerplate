import { InputType, Field, Resolver, Mutation, Query, Arg } from "type-graphql";
import { Recipe } from "../entities/recipe";

@InputType()
class CreateRecipeInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@Resolver()
export class RecipeResolver {
  @Query(() => Recipe)
  async recipe(@Arg("id") id: number) {
    return Recipe.findOne({ id: id });
  }

  @Query(() => [Recipe])
  async recipes() {
    return Recipe.find();
  }

  @Mutation(() => Recipe)
  createRecipe(@Arg("input") input: CreateRecipeInput): Promise<Recipe> {
    return Recipe.create(input).save();
  }
}
