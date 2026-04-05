import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/health', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return `\nServer running!\n ${tables}\n`
})

app.listen({ port: 3333 }).then(() => {
  console.info('HTTP server running or port 3333')
})
