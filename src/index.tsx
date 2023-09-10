import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { html } from '@elysiajs/html'
    
const index = (children: JSX.Element) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Zeal</title>
            <script src="https://unpkg.com/htmx.org@1.9.3"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
        </head>
        <body>
            cool, the children rendered:
            {children}
        </body>
    </html>
)

export type App = typeof app
const app = new Elysia()
    .use(swagger())
    .use(html())
    .get('/', () => index(<h1>child rendered</h1>))
    .listen(8080)

console.log(`💨 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
console.log(`💨 Swagger is available at http://${app.server?.hostname}:${app.server?.port}/swagger`);
