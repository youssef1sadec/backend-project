import { ordersProduct } from "../order";
import { order } from "../../types/orders.types";
import { orderProduct } from "../../types/ordersProduct.types";
const orders = new ordersProduct();

describe("orders function db test ", () => {
  it("test orders function ", () => {
    //create
    expect(orders.orderProduct).toBeDefined();
    expect(orders.orderProduct).toBeTruthy();
  });
  it("test orders/products function ", () => {
    //create
    expect(orders.addproduct).toBeDefined();
    expect(orders.addproduct).toBeTruthy();
  });

  it("test orders creation", async () => {
    //create
    const orderReq = await orders.orderProduct({
      user: 3,
      statue: "active",
    });
    // console.log("herer       1     2    3");
    // console.log(orderReq);
    // console.log("herer       1     2    3");
    expect(orderReq).toBeTruthy();
    expect(orderReq).toBeDefined();
    expect(orderReq.id).toEqual(2);
  });

  it("orders/products check", async () => {
    const orders_product = await orders.addproduct(2, "2", 122) as unknown as orderProduct ;
    // console.log("herer       1     2    3");
    // console.log(orders_product);
    // console.log("herer       1     2    3");
    expect(orders_product).toBeDefined();
    expect(orders_product).toBeTruthy();
    expect(orders_product.id).toEqual(2);
    expect(orders_product.quantity).toEqual(122)
  });
});
