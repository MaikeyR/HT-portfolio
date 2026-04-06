import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { GetProjectByIdHandler } from '../../../service/handlers/get-project-by-id.handler';
import { GetProjectByIdQuery } from '../../../service/queries/get-project-by-id.query';
import { ProjectGraphqlV1Model } from './models/project-graphql-v1.model';

@Resolver(() => ProjectGraphqlV1Model)
export class ProjectGraphqlV1Resolver {
  constructor(
    private readonly getProjectByIdHandler: GetProjectByIdHandler
  ) {}

  @Query(() => ProjectGraphqlV1Model, {
    name: 'project',
    nullable: true,
  })
  async getProject(
    @Args('id', { type: () => ID }) id: string
  ): Promise<ProjectGraphqlV1Model> {
    const project = await this.getProjectByIdHandler.execute(
      new GetProjectByIdQuery(id)
    );

    return {
      id: project.id,
      title: project.title,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
    };
  }
}
