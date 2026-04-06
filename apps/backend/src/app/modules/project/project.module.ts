import { Module } from '@nestjs/common';
import { ProjectGraphqlV1Resolver } from './controller/graphql/v1/project-graphql-v1.resolver';
import { ProjectServiceModule } from './service/project.service.module';

@Module({
  imports: [ProjectServiceModule],
  providers: [ProjectGraphqlV1Resolver],
})
export class ProjectModule {}
