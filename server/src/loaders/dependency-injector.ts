import { Container } from 'typedi';

import { logger } from './logger';

import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export const LOGGER_KEY = 'logger';
export const DATABASE_KEY = 'database';

type DependencyInjectorLoaderProps = {
  db: PostgresJsDatabase<Record<string, never>>;
};

export const dependencyInjectorLoader = ({
  db,
}: DependencyInjectorLoaderProps) => {
  Container.set(LOGGER_KEY, logger);
  Container.set(DATABASE_KEY, db);
};
