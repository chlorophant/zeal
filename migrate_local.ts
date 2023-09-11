import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { drizzle } from 'drizzle-orm/bun-sqlite';

import { Database } from 'bun:sqlite';
const localSqlite = new Database('todos.db');

async function main() {
  const db = drizzle(localSqlite)
  console.log('Running migrations')
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('Migrated successfully')
  process.exit(0)
}

main().catch((e) => {
    console.error('Migration failed')
    console.error(e)
    process.exit(1)
});