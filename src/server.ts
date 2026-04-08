import { app } from './app'
import { env } from './env'

app.listen({ port: env.PORT }).then(() => {
  console.info(`HTTP server running on port ${env.PORT}`)
})
