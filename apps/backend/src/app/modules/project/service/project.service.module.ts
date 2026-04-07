import { Module } from '@nestjs/common';
import { GetProjectByIdHandler } from './handlers/get-project-by-id.handler';
import { PrismaProjectRepository } from '../repository/prisma-project.repository';
import { ProjectRepository } from '../repository/project.repository';
import { CreateProjectHandler } from './handlers/create-project.handler';

@Module({
  providers: [
    GetProjectByIdHandler,
    CreateProjectHandler,
    {
      provide: ProjectRepository,
      useClass: PrismaProjectRepository,
    },
  ],
  exports: [GetProjectByIdHandler, CreateProjectHandler],
})
export class ProjectServiceModule {}
