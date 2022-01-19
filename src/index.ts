import express from "express";
import { graphqlHTTP } from "express-graphql";
import config from "config";
import { schema } from "./schema";

const app = express();
const port = config.get<number>("port");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, async () => {
  console.log(`🚀  GraphQL server running at port: ${port}`);
  //await connect();
});
