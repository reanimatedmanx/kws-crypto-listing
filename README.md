### rm-kws-interview-task

🌠 Bitcoin listing app created based on the requirements defined in [#1](https://github.com/reanimated-man/rm-kws-interview-task/issues/1)

This project was generated using [Nx](https://nx.dev).

### Getting up & running

1. **Prerequisites**
```
# Get pnpm https://pnpm.io/pnpm-cli
```

```
git clone https://github.com/reanimated-man/rm-kws-interview-task.git
pnpm i
```

2. **Launch apps**
```
# Serve individually.
pnpm serve api-users
pnpm serve api-instruments
pnpm serve # Launch default app `web`

# Serve all in parallel
pnpm serve:all
```

3. **Have fun** 🎉

<img src="https://user-images.githubusercontent.com/32410574/180906724-f18a16fb-a808-4322-ba83-4dd40a31260b.png" width=480>
<img src="https://user-images.githubusercontent.com/32410574/180906765-e592e91a-8a04-4683-8cff-b23d07fde0f6.png" width=480>


```
# Instruments API Swagger playground
http://localhost:3333/api/docs

# Users API Swagger playground
http://localhost:3334/api/docs
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

* Obviously everything can be improved & finalized (including optional UI and api integration), it's a perpetual action. Nothing is perfect, everything can be refined.   * Tests where not mentioned in the technical challenge, could be written in parallel but wanted to leave that for the end and ended up not having enough time to finalize it.
* P.S. I still hate Next.js middleware API. 😆
