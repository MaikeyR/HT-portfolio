import { NotFoundError } from '../../../../shared/errors/not-found.error';

export class ProjectNotFoundError extends NotFoundError {
  constructor(projectId: string) {
    super(`Project with id "${projectId}" was not found.`, 'PROJECT_NOT_FOUND');
  }
}
