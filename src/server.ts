import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.get('/health', async () => {
  return `\nHTTP server running!\n\n`
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.listen({ port: env.PORT }).then(() => {
  console.info(`HTTP server running on port ${env.PORT}`)
})
