import express from "express";
import cors from "cors";
import product_Route from "./Aroutes/hundlers.product";
import usersRoutes from "./Aroutes/hundlers.user";
import order_app from "./Aroutes/hundlers.orders";
const port: Number = 3130;
const app: express.Application = express();
process.on("uncaughtException", (err: Error) => {
  // errors logs
  console.log(err);
});
product_Route(app);
usersRoutes(app);
order_app(app);
const corstOp: {
  origin: string;
  optionsSuccessStatus: number;
} = {
  origin: `https://localhost:${port}`,
  optionsSuccessStatus: 200,
};
app.use(cors(corstOp));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`my port is ${port}` + `, http://localhost:${port}`);
});
 
export default app 