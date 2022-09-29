import app from "../../index";
import superset from "supertest";
import { token } from "./01-userhundlerSpec";
const request = superset(app);

describe("TEST THE orders HUNDLERS وه", () => {
  beforeAll(async () => {
    await request.post("/users").send({
      first_name: "joe2",
      last_name: "hopes2",
      email: "gogo2",
      pass: "password",
    });
  });
  it(" create product  ", async () => {
    const response = await request.post("/order").send({
      user: 2,
      statue: "active",
    });
    expect(response.status).toBe(200);
    expect(response).toBeDefined;
    // console.log("important test is here");
    // console.log(response.body);
    // console.log(response.body.id);
    // console.log(response.body.statue);
    // console.log("important test is here");
    expect(response.body.id).toEqual(1);
    expect(response.body.statue).toEqual("active");
  });
});

describe( "create order_product function", () => {
it(" create order_product function", async () => {
  const response = await request.post("/orders/products").send({
    product_id: 1,
    orders:"1",
    quantity: 12
  }).set("Authorization", "Bearer " + token);
  // console.log("hereerere    ");
  // console.log(response.body);
  // console.log("hereerere    ");
  expect(response.status).toBe(200);
  expect(response.body.product_id).toEqual("1");
  expect(response.body.quantity).toEqual(12);
})})