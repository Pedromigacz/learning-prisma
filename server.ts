import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import express, { Request, Response } from "express";
import http from "http";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./src/schema";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 1337 });
    resolve();
  });

  console.log(`Server is running on port localhost:1337/${server.graphqlPath}`);
}

// Start server
startApolloServer();
