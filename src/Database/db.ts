// import { createClient } from '@libsql/client'
// import { drizzle as tursoDrizzle } from 'drizzle-orm/libsql'
import { drizzle as sqliteDrizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as schema from './schema'
// const isLocal = Bun.env.ENV === 'local'
const localSqlite = new Database('todos.db');
const localDb = sqliteDrizzle(localSqlite)
// const tursoClient = createClient({
//   url: process.env.DATABASE_URL!,
//   authToken: process.env.DATABASE_AUTH_TOKEN,
// })
// const remoteDb = tursoDrizzle(tursoClient, { schema, logger: true })
// export const db = isLocal ? localDb : remoteDb;
export const db = localDb