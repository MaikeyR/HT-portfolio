import { Project } from '../service/entities/project.entity';

export abstract class ProjectRepository {
  abstract findById(id: string): Promise<Project | null>;

  abstract create(project: Project): Promise<Project>;
}
