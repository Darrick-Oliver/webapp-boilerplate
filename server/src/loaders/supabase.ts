import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

import { config } from '@/config';

export type Database = PostgresJsDatabase<Record<string, never>>;

export const supabaseLoader = () => {
  const client = postgres(config.database.url);
  const db = drizzle(client) satisfies Database;

  return { db };
};
