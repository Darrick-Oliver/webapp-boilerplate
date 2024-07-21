import * as trpcExpress from '@trpc/server/adapters/express';

import type { Express } from 'express';

import { apiRouter } from '@/api';
import { createContext } from '@/trpc';

type TRPCProps = {
  expressApp: Express;
};

export const trpcLoader = async ({ expressApp }: TRPCProps) => {
  expressApp.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
      router: apiRouter,
      createContext,
    })
  );
};
