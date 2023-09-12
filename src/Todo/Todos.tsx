import { Elysia, t } from 'elysia'
import { Index } from '../Index'
import { db } from '../Database/db'
import { todos as todoTable } from '../Database/schema'

const todo_input = {
    body: t.Object({
        todo_content: t.String()
    })
}

export const todos = new Elysia()
    .group('/todo', app => (
        app
        .get('/', async () => {
            const todos = await db.select().from(todoTable).all()
            return Index(
                <>
                    <h3>Todo List:</h3>
                    <form hx-swap="afterbegin" hx-post="/todo" hx-ext="json-enc" hx-target="#todos" _="on submit target.reset()">
                        <label for="todo_content">New Todo</label>
                        <input id="todo_content" name="todo_content" type="text" placeholder="New todo" />
                        <button type="submit">Create</button>
                    </form>
                    <ul id="todos">
                        {todos.map(todo => <li>{todo.content}</li>)}
                    </ul>
                </>
            )
        })
        .post('/', async ({ body }) => {
            const { todo_content: content } = body
            const insertData = {id: crypto.randomUUID(), content, completed: false}
            const todo = await db.insert(todoTable).values(insertData).returning()
            return <li>{todo[0].content}</li>
        }, todo_input)
    ))
