import { integer, sqliteTable, text  } from 'drizzle-orm/sqlite-core'

export const todos = sqliteTable('todos', {
  id: text('id', { mode: 'text' }).unique().primaryKey(),
  content: text('content').notNull(),
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
});

export type Todo = typeof todos