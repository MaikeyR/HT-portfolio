import { AppError } from './app.error';

export class InvalidError extends AppError {
  constructor(message: string, code = 'INVALID_REQUEST') {
    super(message, code);
  }
}
