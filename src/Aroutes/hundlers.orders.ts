import { Application, Response, Request } from "express";
import bodyParser from "body-parser";
import { ordersProduct } from "../model/order";
import { order } from "../types/orders.types";
import verifyAuthToken from "./middle";

const oreder_products = new ordersProduct();

const getOrder = async (req: Request, res: Response) => {
  try {
    const ordersItems: order = {
      user: req.body.user,
      statue: req.body.statue,
    };
    const newOrder = await oreder_products.orderProduct(ordersItems);
    // console.log(newOrder);
    // console.log(ordersItems);
    res.json(newOrder);
  } catch (err: unknown) {
    throw new Error(`Could not get product order. Error: ${err}`);
  }
};
const addproduct = async (req: Request, res: Response) => {
  try { 
    const product_id: number = req.body.product_id;
    const order_id: string = req.body.orders;
    const quantity: number = parseInt(req.body.quantity) ;
    const response = await oreder_products.addproduct(
      product_id,
      order_id,
      quantity
    );
    // console.log(product_id,order_id,quantity,'here the orders coco hundlers');
    // console.log(response);
    res.json(response);
  } catch (error: unknown) {
    res.status(401).json({ message: `error is ${error}` });
  }
};

const order_app = (app: Application) => {
  app.use(bodyParser.json());
  app.post("/order", getOrder); // create order
  app.post("/orders/products", verifyAuthToken, addproduct); // add product
};
export default order_app;
