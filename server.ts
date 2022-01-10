import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import express, { Request, Response } from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./src/schema";
import { createContext } from "./src/context";
import { PORT } from "./environment";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    introspection: true,
    schema: schema,
    context: createContext,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: PORT });
    resolve();
  });

  console.log(`Server is running on port ${PORT}`);
}

// Start server
startApolloServer();
