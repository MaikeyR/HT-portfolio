import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { join } from 'node:path';
import { ProjectModule } from './modules/project/project.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { AppError } from './shared/errors/app.error';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'apps/backend/src/generated/graphql/schema.gql'
      ),
      path: '/graphql',
      sortSchema: true,
      formatError: (formattedError, error) => {
        const originalError = error instanceof GraphQLError ? error.originalError : null;

        if (originalError instanceof AppError) {
          return {
            message: originalError.message,
            path: formattedError.path,
            extensions: {
              code: originalError.code,
            },
          };
        }

        return {
          message: 'Internal server error',
          path: formattedError.path,
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        };
      },
    }),
    ProjectModule,
  ],
})
export class AppModule { }
