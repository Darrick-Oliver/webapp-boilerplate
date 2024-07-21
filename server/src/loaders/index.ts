import { trpcLoader } from './trpc';
import { dependencyInjectorLoader } from './dependency-injector';
import { supabaseLoader } from './supabase';

import type { Express } from 'express';

type LoadersProps = {
  expressApp: Express;
};

export const loaders = async ({ expressApp }: LoadersProps) => {
  await trpcLoader({ expressApp });
  const { db } = supabaseLoader();

  dependencyInjectorLoader({ db });
};
