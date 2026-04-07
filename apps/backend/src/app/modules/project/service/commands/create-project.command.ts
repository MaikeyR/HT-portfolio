export class CreateProjectCommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
  ) {}
}
