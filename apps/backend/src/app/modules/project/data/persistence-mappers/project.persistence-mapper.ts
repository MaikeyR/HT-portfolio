import { Project as PrismaProject } from '../../../../../generated/prisma/client';
import { Project } from '../../domain/entities/project.entity';

export class ProjectPersistenceMapper {
  static toDomain(project: PrismaProject): Project {
    return new Project(
      project.id,
      project.title,
      project.description,
      project.startDate,
      project.endDate
    );
  }
}
