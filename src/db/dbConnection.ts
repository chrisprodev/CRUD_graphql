import { createConnection } from "typeorm";

const connection = async () => {
  try {
    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "graphql_test",
      entities: [],
      synchronize: false,
      logging: false,
    });
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connection;
