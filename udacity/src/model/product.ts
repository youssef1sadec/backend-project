import { product } from "../types/product.types";
import Client from "../../database/client"
// console.log(Client);
export class ProductService {
    async index(): Promise<product[]> {
        try {
          // @ts-ignore
          const conn = await Client.connect();
          const sql = "SELECT * FROM  product";
          const result = await conn.query(sql);
          conn.release();
          // console.log(result.rows);
          return result.rows;
        } catch (err:unknown) {
          throw new Error(`Could not get product. Error: ${err}`);
        }
      }

      async show(id: string): Promise<product> {
        try {
          const sql = "SELECT * FROM  product WHERE id=($1)";
          // @ts-ignore
          const conn = await Client.connect();
          const result = await conn.query(sql, [id]);
          conn.release();
          return result.rows[0];
        } catch (err: unknown) {
          throw new Error(`Could not find product ${id}. Error: ${err}`);
        }
      }
      async create(b:product): Promise<product> {
        try {
          const sql =
            "INSERT INTO  product (name_pro, price) VALUES($1, $2) RETURNING *";
          // @ts-ignore
          const conn = await Client.connect();
          const result = await conn.query(sql, [
            b.name_pro,
            b.price,
          ]);
          // console.log(result);
          // console.log(result.rows[0]);
          conn.release();
          return result.rows[0];
          
        } catch (err: unknown) {
          throw new Error(`Could not add product. Error: ${err}`);
        }
      }
    
}
