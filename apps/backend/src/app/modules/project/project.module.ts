import { Module } from '@nestjs/common';
import { ProjectGraphqlV1Resolver } from './api/graphql/v1/project-graphql-v1.resolver';
import { ProjectApplicationModule } from './application/project.application.module';

@Module({
  imports: [ProjectApplicationModule],
  providers: [ProjectGraphqlV1Resolver],
})
export class ProjectModule {}
