import app from "./app";
import config from "config";
import connect from "./db/dbConnection";

const port = config.get<number>("port");

app.listen(port, async () => {
  try {
    console.log(`🚀  GraphQL server running at port: ${port}`);
    await connect();
  } catch (error) {
    console.log(error);
  }
});
