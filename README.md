### rm-kws-interview-task

🌠 Bitcoin listing app created based on the requirements defined in [#1](https://github.com/reanimated-man/rm-kws-interview-task/issues/1)

This project was generated using [Nx](https://nx.dev).

### Getting up & running

0. **Prerequisites**
```
# Get pnpm https://pnpm.io/pnpm-cli
```

```
git clone https://github.com/reanimated-man/rm-kws-interview-task.git
pnpm i
```

1. Launch apps
```
pnpm serve api-users
pnpm serve api-instruments
pnpm serve # Launch default app `web`
```

### Stack

**Core**  
[Nx](https://nx.dev)

**Backend**  
[Nest.js](https://nestjs.com)  
[Fastify](https://www.fastify.io)  
[SQLite](https://www.sqlite.org/index.html)  
[Prisma](https://www.prisma.io)  
[Passport.js](https://www.passportjs.org)

**Frontend**  
[Next.js](https://nextjs.com)  
[Chakra UI](https://chakra-ui.com)

**Notes**

- SQLite can be scaled to distributed postgres if required.
- Prisma can be replaced with TypeORM if needed.

### DB Migrations

`pnpm prisma migrate <db_name> --name <any_migration_name>`

Example

```bash
pnpm prisma migrate dev --name init
```

### TL;DR;

**Final thoughts**

* Obviously everything can be improved & finalized (including optional UI and api integration), it's a perpetual action. Nothing is perfect, everything can be refined. * Tests where not mentioned in the technical challenge, could be written in parallel but wanted to leave that for the end and ended up not having enough time to finalize it.
