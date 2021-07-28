import express from "express";
import { ApolloServer } from "apollo-server-express";
import { PingResolver } from "./resolvers/ping";
import { buildSchema } from "type-graphql";

export async function startServer() {

    const app = express();
    // app.use(express.urlencoded({ extended: true }))
    // app.use(express.json())
  
    const server = new ApolloServer({
      schema: await buildSchema({
        resolvers: [PingResolver],
        validate: false
      }),
      context: ({ req, res }) => ({ req, res })
    });
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });
  
    return app;
  }
