# Express Boilerplate (TypeScript, tsyringe, OOP, Prisma)

A scalable, production-ready Express boilerplate built with:
- **TypeScript** for static typing
- **tsyringe** for dependency injection
- **OOP** principles for clean architecture
- **Prisma** ORM for database access

---

## Features

- 📦 Modular structure (Controllers, Services, Repositories)
- 🔥 Dependency injection with `tsyringe`
- 🚀 Fast and type-safe database queries with `Prisma`
- 🟡 Middleware-based validation and error handling
- 🧪 Ready for testing (dependency injection makes mocking easy)
- 🎯 Focused on clean, maintainable, and scalable code

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn
- PostgreSQL, MySQL, SQLite (or any Prisma-supported database)

### Installation

1. Clone the repository and install dependencies
2. Create a `.env` file based on `.env.example`
3. Set your database connection string
4. Generate Prisma client
5. Push Prisma schema to your database

---

## Scripts

| Command               | Description                           |
|------------------------|---------------------------------------|
| `npm run dev`          | Start the server in development mode |

---

## Project Structure

```
TODO
```

---

## Dependency Injection

All services, controllers, and repositories are registered using `tsyringe` for automatic injection.  
Setup for container registrations is located inside `src/containers/`.

---

## Environment Variables

| Variable        | Description                     |
|-----------------|---------------------------------|
| `PORT`          | Port number for the server       |
| `DATABASE_URL`  | Prisma database connection URL  |
| `DIRECT_URL`    | Prisma direct database connection URL  |

---

## Running in Production

1. Build the project
2. Start the server

---

## Future Improvements

- Swagger API documentation
- Dockerfile + Docker Compose setup
- Authentication module (JWT)
- Logging (Winston / Pino)
- Request validation (class-validator)

---

## License

This project is licensed under the MIT License.

