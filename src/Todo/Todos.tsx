import { Index } from '../Index'
import { db } from '../Database/db'
import { todos as todoTable } from '../Database/schema'
 
export const Todos = async () => {
    const todos = await db.select().from(todoTable).all();
    return Index(
        <>
            <h3>Todo List:</h3>
            <ul>
                {todos.map(todo => <li>{todo.content}</li>)}
            </ul>
        </>
    )
}