import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { Project } from '../service/entities/project.entity';
import { PrismaProjectPersistenceMapper } from '../data/persistence-mappers/prisma-project.persistence-mapper';
import { ProjectRepository } from './project.repository';

@Injectable()
export class PrismaProjectRepository implements ProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Project | null> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return null;
    }

    return PrismaProjectPersistenceMapper.toDomain(project);
  }

  async create(project: Project): Promise<Project> {
    const createdProject = await this.prisma.project.create({
      data: {
        id: project.id,
        title: project.title,
        description: project.description,
        startDate: project.startDate,
        endDate: project.endDate,
      },
    });

    return PrismaProjectPersistenceMapper.toDomain(createdProject);
  }
}