import { order } from "../types/orders.types";
import { orderProduct } from "../types/ordersProduct.types";
import Client from "../../database/client";

export class ordersProduct {
  async orderProduct(U: order): Promise<order> {
    try {
      // @ts-ignore
      const connection = await Client.connect();
      const sql = `INSERT INTO orders(use_id, statue) VALUES($1, $2) RETURNING *`;
      const result = await connection.query(sql, [U.user, U.statue]);
      const order = result.rows[0];

      connection.release();
      // console.log(result);
      return order;
    } catch (error) {
      throw new Error(`Could not get ${error} order`);
    }
  }
  async addproduct(
    product_id: number,
    order_id: string,
    quantity: number
  ): Promise<orderProduct[]> {
    try {
      // @ts-ignore
      const connection = await Client.connect();
      const sql = `INSERT INTO orders_product (order_id , product_id , quantity) VALUES($1, $2, $3) RETURNING *`;
      const result = await connection.query(sql, [order_id, product_id, quantity]);
      connection.release();
      // console.log(result.rows[0],result.rows[0] ,"here the order function");
      return result.rows[0];
    } catch (error) {
    throw new Error(`Could not ${error}`);
    }
  }
}
/// [qdwdwafa ,DAAFF ]