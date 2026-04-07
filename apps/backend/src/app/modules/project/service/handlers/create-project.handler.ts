import { CreateProjectCommand } from '../commands/create-project.command';
import { Inject, Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { ProjectRepository } from '../../repository/project.repository';
import { randomUUID } from 'node:crypto';
import { CreateProjectMapper } from '../mappers/create-project-mapper';

@Injectable()
export class CreateProjectHandler {
  constructor(
    @Inject(ProjectRepository)
    private readonly projectRepository: ProjectRepository
  ) { }

  async execute(command: CreateProjectCommand): Promise<Project> {
    const validatedPayload = CreateProjectMapper.toPayload(command);

    const project = new Project(
      randomUUID(),
      validatedPayload.title,
      validatedPayload.description,
      validatedPayload.startDate,
      validatedPayload.endDate
    );

    await this.projectRepository.create(project);
    return project;
  }
}
