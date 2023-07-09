import dotenv from "dotenv";
dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  env,
  POSTGRES_DB_test,
  port,
  Salt,
  Bcrypt_pass,
  tokenin,
} = process.env;



export default {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  env,
  POSTGRES_DB_test,
  port,
  Salt,
  Bcrypt_pass,
  tokenin,
};
