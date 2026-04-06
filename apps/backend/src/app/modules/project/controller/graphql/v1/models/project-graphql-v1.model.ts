import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Project')
export class ProjectGraphqlV1Model {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field(() => GraphQLISODateTime)
  startDate!: Date;

  @Field(() => GraphQLISODateTime)
  endDate!: Date;
}
