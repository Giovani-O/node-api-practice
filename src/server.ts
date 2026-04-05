import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/health', async () => {
  return `\nHTTP server running!\n\n`
})

app.listen({ port: env.PORT }).then(() => {
  console.info(`HTTP server running on port ${env.PORT}`)
})
