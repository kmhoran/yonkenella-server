import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import schema from "./graphQL/schema";
import { existsSync } from "fs";

import express from "express";
import path from "path";
const urls = {
  graphQL: "/graphql"
};

const app = express();
const port = process.env.PORT || 3001;
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});

app.use("*", cors(), getHost);
app.use(compression());
server.applyMiddleware({ app, path: urls.graphQL });

const httpServer = createServer(app);

httpServer.listen({ port }, onServerUpSuccess);

async function onServerUpSuccess() {
  console.log(
    `\nGraphQL is now running on http://localhost:${port}${urls.graphQL}`
  );
}


function getHost(req: any, res: any, next: any) {
  console.log("host:", req.headers.host);
  next();
}
