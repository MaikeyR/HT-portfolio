import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType('ProjectInput')
export class CreateProjectInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  description!: string;

  @Field(() => GraphQLISODateTime)
  @IsNotEmpty()
  startDate!: Date;

  @Field(() => GraphQLISODateTime)
  @IsNotEmpty()
  endDate!: Date;
}