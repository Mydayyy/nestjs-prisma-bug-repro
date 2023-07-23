## NestJS Prisma env clash

This is a demo repo demonstrating prisma and nestjs clashing with their environment variables.
See:
https://github.com/prisma/prisma/issues/18239
https://github.com/prisma/prisma/issues/15620

## HowTo:

1. Clone
2. Run:
   1. `npm install`
   2. `npx prisma generate`
3. Test by starting nestjs with `npm run start`

Expected and actual output is shown shown in stdout.

## Whats happening:
- NestJS loads the env vars in the following order (`src/app.module.ts` line 11): `.env.local` and `.env` after

- The first variable which NestJS finds is supposed to take effect, so `.env.local` should override `.env`

- Since prisma automatically loads the variables during the import from `.env`, the variables from inside `.env.local` already exist when NestJS tried parsing `.env.local`, so those did not take precedence but were ignored by NestJS

Removing the prisma client import (by removing `PrismaService` in `src/app.module.ts` line 15) 
shows the intended behavior. We should be able to tell prisma not to parse the .env file.
