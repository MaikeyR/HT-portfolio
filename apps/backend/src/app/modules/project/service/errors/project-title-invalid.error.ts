import { InvalidError } from '../../../../shared/errors/invalid.error';

export class ProjectTitleInvalidError extends InvalidError   {
  constructor(title: string) {
    super(`Project title is invalid: ${title}`, 'INVALID_REQUEST');
  }
}
