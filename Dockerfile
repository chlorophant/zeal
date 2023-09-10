FROM oven/bun

COPY src ./src
COPY package.json .
COPY bun.lockb .
COPY tsconfig.json .

RUN bun install

CMD bun start