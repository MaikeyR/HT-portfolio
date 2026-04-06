import { Project as PrismaProject } from '../../../../../generated/prisma/client';
import { Project } from '../../service/entities/project.entity';

export class PrismaProjectPersistenceMapper {
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
