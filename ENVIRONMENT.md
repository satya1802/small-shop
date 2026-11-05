# ENVIRONMENT

Written by Dex. Do not edit: Dex rewrites this file whenever the project's service list changes.

How this project's code reaches its backing services. Every connection setting is an environment variable named below. The sandbox provides the values (the deployment does in production); never write a value into code, tests, config files or this repository.

## PostgreSQL

The app's relational database.

| Variable | Holds |
|---|---|
| `DATABASE_URL` | SQLAlchemy URL of the database, password included |

Read these variables with the framework's own settings mechanism.

Tests use the real PostgreSQL the sandbox runs (same `DATABASE_URL`); no mocks, no SQLite stand-in.

## Redis

Cache and/or queue broker.

| Variable | Holds |
|---|---|
| `REDIS_URL` | redis:// URL of the server, including the database number |

Read these variables with the framework's own settings mechanism.

Tests use the real Redis the sandbox runs (same `REDIS_URL`); no mocks.
