import { Application, Response, Request } from "express";
import { ProductService } from "../model/product";
import { product } from "../types/product.types";
import bodyParser from "body-parser";
import verifyAuthToken from "./middle"

// show aa Products 
const Product = new ProductService();
const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.index();
    res.json(products);
  } catch (error: unknown) {
    res.status(404);
    res.json({ error: error });
  }
};
// show one product
const getOneProduct = async (req: Request, res: Response) => {
  try {
    const oneProduct = await Product.show(req.body.id);
    res.json(oneProduct);
  } catch (error: unknown) {
    res.status(404);
    res.json({ error: error });
  }
};
//create new Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productItem: product = {
      name_pro: req.body.name_pro,
      price: req.body.price,
    };
    const crateProduct = await Product.create(productItem);
    // console.log(crateProduct +"cocco") ;
    res.json(crateProduct);
  } catch (error: unknown) {
    res.status(404);
    res.json({ error: error });
  }
};

const productRoute = (app: Application) => {
  app.use(bodyParser.json());
  app.get("/pro", verifyAuthToken, getAllProducts);// show products
  app.get("/pro/:id", verifyAuthToken, getOneProduct); // show  one product 
  app.post("/pro", verifyAuthToken , createProduct);// create new product
};

export default productRoute;

