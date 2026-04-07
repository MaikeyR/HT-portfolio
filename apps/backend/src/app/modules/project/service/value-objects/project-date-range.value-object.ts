import { ProjectDateRangeInvalidError } from "../errors/project-date-range-invalid.error";

export class ProjectDateRange {
  public readonly dateRange : { startDate: Date; endDate: Date };

  constructor(startDate: Date, endDate: Date) {

    if (startDate > endDate) {
      throw new ProjectDateRangeInvalidError();
    }
    this.dateRange = { startDate, endDate };
  }

  get(): { startDate: Date; endDate: Date } {
    return this.dateRange;
  }
}
