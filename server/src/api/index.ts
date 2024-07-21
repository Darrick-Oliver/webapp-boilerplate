import { authRouter } from './routes/auth';

import { router } from '@/trpc';

export const apiRouter = router({
  auth: authRouter,
});
