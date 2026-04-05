import { Module } from '@nestjs/common';
import { GetProjectByIdHandler } from './handlers/get-project-by-id.handler';
import { PrismaProjectRepository } from '../repository/prisma-project.repository';
import { ProjectRepository } from '../repository/project.repository';

@Module({
  providers: [
    GetProjectByIdHandler,
    {
      provide: ProjectRepository,
      useClass: PrismaProjectRepository,
    },
  ],
  exports: [GetProjectByIdHandler],
})
export class ProjectApplicationModule {}
