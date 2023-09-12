import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { todos } from './Todo/Todos'

export type App = typeof app
const app = new Elysia()
    .use(html())
    .use(todos)
    .listen(process.env.PORT || 3000)

console.log(`💨  Elysia is running at http://${app.server?.hostname}:${app.server?.port}/todo  💨`)