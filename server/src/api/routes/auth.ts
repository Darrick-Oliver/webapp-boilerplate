import { Container } from 'typedi';
import { z } from 'zod';

import type { Logger } from 'winston';

import { LOGGER_KEY } from '@/loaders/dependency-injector';
import { AuthService } from '@/services/auth';
import { publicProcedure, router } from '@/trpc';

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const logger = Container.get(LOGGER_KEY) satisfies Logger;
      logger.debug(`Sign up called with body: ${JSON.stringify(input)}`);

      const authService = Container.get(AuthService);
      const res = await authService.signUp(input);
      return res;
    }),

  signin: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const logger = Container.get(LOGGER_KEY) satisfies Logger;
      logger.debug(`Sign in called with body: ${JSON.stringify(input)}`);

      const { username, password } = input;

      const authService = Container.get(AuthService);
      const { token } = await authService.signIn(username, password);
      return token;
    }),
});
