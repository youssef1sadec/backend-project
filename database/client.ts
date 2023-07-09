import data from "../src/database";
import { Pool } from "pg";
let Client: unknown;

if (data.env === "dev") {
  Client = new Pool({
    host: data.POSTGRES_HOST,
    database: data.POSTGRES_DB,
    user: data.POSTGRES_USER,
    password: data.POSTGRES_PASSWORD,
    port: data.port as unknown as number,
  });
}   
if (data.env === "test") {
  Client = new Pool({
    host: data.POSTGRES_HOST,
    database: data.POSTGRES_DB_test,
    user: data.POSTGRES_USER,
    password: data.POSTGRES_PASSWORD,
    port: data.port as unknown as number,
  });
}
export default Client;
