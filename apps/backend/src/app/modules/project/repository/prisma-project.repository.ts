import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { Project } from '../domain/entities/project.entity';
import { ProjectPersistenceMapper } from '../data/persistence-mappers/project.persistence-mapper';
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

    return ProjectPersistenceMapper.toDomain(project);
  }
}
