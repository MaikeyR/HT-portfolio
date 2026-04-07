import { CreateProjectCommand } from '../commands/create-project.command';
import { CreateProjectPayload } from '../interfaces/create-project.payload.interface';
import { ProjectTitle } from '../value-objects/project-title.value-object';
import { ProjectDateRange } from '../value-objects/project-date-range.value-object';


export class CreateProjectMapper {
  static toPayload(command: CreateProjectCommand) : CreateProjectPayload {    
    const title = new ProjectTitle(command.title).toString();
    const dateRange = new ProjectDateRange(command.startDate, command.endDate).get();
    
    const validatedPayload: CreateProjectPayload = {
      title: title,
      description: command.description,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate
    };

    return validatedPayload;
  }
}