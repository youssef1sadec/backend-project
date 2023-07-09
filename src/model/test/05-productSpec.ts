import { ProductService } from "../product";
import { product } from "../../types/product.types";

const product = new ProductService();

describe("product function db test ", () => {
  it("test  function ", () => {
    //show
    expect(product.show).toBeDefined();
    expect(product.show).toBeTruthy();
    //index
    expect(product.index).toBeDefined();
    expect(product.index).toBeTruthy();
    //crete
    expect(product.create).toBeDefined();
    expect(product.create).toBeTruthy();
  });

  it("show all product ", async () => {
    const req = (await product.index()) as unknown as product[];
    // console.log(req);
    // console.log(req.length);
    expect(req).toBeDefined();
    expect(req).toBeTruthy();
    expect(req.length).toBe(1);
    expect(req[0].id).toEqual(1);
  });
  it("show specific product", async () => {
    const req = await product.show("1");
    // console.log("herer     1");
    // console.log(req);
    // // console.log(req);
    // console.log(req.id);
    // console.log(req);
    // console.log("herer     1");
    expect(req).toBeDefined();
    expect(req.id).toEqual(1);
    expect(req).toBeTruthy();
  });

  it("create product", async () => {
    const req = (await product.create({
      name_pro: "pc",
      price:parseInt("123.99") 
    })) ;
    // console.log("herer     1");
    // console.log(req);
    // console.log("herer     1");

    expect(req).toBeDefined();
    expect(req.id).toEqual(2);
    expect(req).toBeTruthy();
  });
});





