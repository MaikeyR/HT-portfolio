import { ProjectTitleInvalidError } from "../errors/project-title-invalid.error";

export class ProjectTitle {
  private static readonly MAX_LENGTH = 50;
  private readonly value: string;

  constructor(value: string) {
    const normalizedValue = value?.trim();

    if (!normalizedValue || normalizedValue.length > ProjectTitle.MAX_LENGTH) {
      throw new ProjectTitleInvalidError(normalizedValue);
    }

    this.value = normalizedValue;
  }

  toString(): string {
    return this.value;
  }
}
