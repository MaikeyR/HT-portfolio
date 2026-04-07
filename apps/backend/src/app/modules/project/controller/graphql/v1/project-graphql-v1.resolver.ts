import { Args, ID, Query, Mutation, Resolver } from '@nestjs/graphql';
import { GetProjectByIdHandler } from '../../../service/handlers/get-project-by-id.handler';
import { CreateProjectHandler } from '../../../service/handlers/create-project.handler';
import { GetProjectByIdQuery } from '../../../service/queries/get-project-by-id.query';
import { CreateProjectCommand } from '../../../service/commands/create-project.command';
import { ProjectGraphqlV1Model } from './models/project-graphql-v1.model';
import { CreateProjectInput } from './dto/create-project.input';
import { UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../../../../../shared/guards/api-key.guard';

@Resolver(() => ProjectGraphqlV1Model)
export class ProjectGraphqlV1Resolver {
  constructor(
    private readonly getProjectByIdHandler: GetProjectByIdHandler,
    private readonly createProjectHandler: CreateProjectHandler
  ) { }

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

  @Mutation(() => ProjectGraphqlV1Model)
  @UseGuards(ApiKeyGuard)
  async createProject(
    @Args('input') input: CreateProjectInput
  ): Promise<ProjectGraphqlV1Model> {

    try {

      const project = await this.createProjectHandler.execute(
        new CreateProjectCommand(
          input.title,
          input.description,
          input.startDate,
          input.endDate,
        )
      );

      return {
        ...project,
      };
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

}
