import { Inject, Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { ProjectRepository } from '../../repository/project.repository';
import { GetProjectByIdQuery } from '../queries/get-project-by-id.query';
import { ProjectNotFoundError } from '../errors/not-found.error';

@Injectable()
export class GetProjectByIdHandler {
  constructor(
    @Inject(ProjectRepository)
    private readonly projectRepository: ProjectRepository
  ) {}

  async execute(query: GetProjectByIdQuery): Promise<Project> {
    const project = await this.projectRepository.findById(query.id);

    if (!project) {
      throw new ProjectNotFoundError(query.id);
    }
    
    return project;
  }
}
