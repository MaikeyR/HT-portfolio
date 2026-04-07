import { InvalidError } from '../../../../shared/errors/invalid.error';

export class ProjectDateRangeInvalidError extends InvalidError   {
  constructor() {
    super(`Project date range is invalid`, 'INVALID_REQUEST');
  }
}
