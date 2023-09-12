export const Index = (children: JSX.Element) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Postit</title>
            <script src="https://unpkg.com/htmx.org@1.9.3" defer="true" />
            <script src="https://unpkg.com/htmx.org/dist/ext/json-enc.js" defer="true" />
            <script src="https://unpkg.com/hyperscript.org@0.9.9" defer="true" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📬</text></svg>"></link>
        </head>
        <body>
            {children}
        </body>
    </html>
)