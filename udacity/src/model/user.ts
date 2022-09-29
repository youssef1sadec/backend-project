import { users } from "../types/users.types";
import Client from "../../database/client";
import bcrypt from "bcrypt";
import data from "../database";
// hush password function
const hashPassword = (password: string) => {
  const salt = parseInt(data.Salt as string, 10);
  const coc = bcrypt.hashSync(`${password}${data.Bcrypt_pass}`, salt);
  // console.log(coc);
  return coc;
};
export class UsersController {
  // show all users
  async index(): Promise<users> {
    try {
      const sql = "SELECT * FROM users";
      // @ts-ignore
      const connection = await Client.connect();
      const result = await connection.query(sql);
      connection.release();
      // console.log(result.rows);
      return result.rows;
    } catch (error: unknown) {
      throw new Error(`Could not get users. Error: ${error}`);
    }
  }
  /// show one user
  async show(id: string): Promise<users> {
    try {
      const sql = "SELECT * FROM users WHERE id =($1)";
      // @ts-ignore
      const connection = await Client.connect();
      const result = await connection.query(sql, [id]);
      connection.release();
      // console.log(result.rows);
      return result.rows;
    } catch (error: unknown) {
      throw new Error(`Could not get users. Error: ${error}`);
    }
  }

  ///create user
  async create(u: users): Promise<users> {
    try {
      const sql =
        "INSERT INTO  users (first_name, last_name, email, pass) VALUES($1, $2, $3, $4) RETURNING *";
      // @ts-ignore
      const connection = await Client.connect();
      const result = await connection.query(sql, [
        u.first_name,
        u.last_name,
        u.email,
        hashPassword(u.pass),
      ]);
      connection.release();
      // console.log(result);
      return result.rows;
    } catch (error: unknown) {
      throw new Error(`Could not get users. Error: ${error}`);
    }
  }
  // delete
  async delete(id: string): Promise<users> {
    try {
      const sql = "DELETE FROM users WHERE id=($1); ";
      //  const sql2=" ALTER SEQUENCE  users_id_seq RESTART WITH 1;"
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      // console.log(result);
      // console.log(result.rows[0]);
      // console.log(result, sql);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete users ${id}. Error: ${err}`);
    }
  }

  //update
  // async update(b: users): Promise<users> {
  //   try {
  //     const sql =
  //       "UPDATE users SET first_name=$1 last_name=$2 email=$3 pass=$4 WHERE id=$5 RETURNING *";
  //     // @ts-ignore
  //     const conn = await Client.connect();
  //     const result = await conn.query(sql, [
  //       b.first_name, //new value
  //       b.last_name, //new value
  //       b.email, //new value
  //       b.pass, //new value
  //       b.id, //new value
  //     ]);
  //     // console.log(result);
  //     // console.log(result.rows[0]);
  //     // console.log(result, sql);
  //     conn.release();
  //     return result.rows[0];
  //   } catch (error) {
  //     throw new Error(`Could not  get ${error}`);
  //   }
  // }
}




