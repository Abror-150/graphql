import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
}
