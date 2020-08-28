import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import schema from './schema'
require('dotenv').config()

const port = process.env.PORT || 4001

const app = express()

const debugApolloConfig = {
  introspection: true,
  playground: true,
  tracing: true
}

const server = new ApolloServer({
  schema,
  ...debugApolloConfig,
  debug: process.env.NODE_ENV !== 'production'
})

server.applyMiddleware({ app })

const httpServer = createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})
