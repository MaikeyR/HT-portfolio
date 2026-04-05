import { Project } from '../domain/entities/project.entity';

export abstract class ProjectRepository {
  abstract findById(id: string): Promise<Project | null>;
}
