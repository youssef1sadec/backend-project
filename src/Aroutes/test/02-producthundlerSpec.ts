import app from "../../index";
import superset from "supertest";
import { token } from "./01-userhundlerSpec";
const request = superset(app);

describe("product hundlers", () => {
  it(" create product and check token ", async () => {
    const response = await request
      .post("/pro")
      .send({
        name_pro: "phone",
        price: 123,
      })
      .set("Authorization", "Bearer " + token);
    // console.log(response.body);
    expect(response.status).toBe(200);
    expect(response).toBeDefined;
    expect(response.body.name_pro).toEqual("phone");
    expect(response.body.price).toEqual(123);
  });
  it("show all product ", async () => {
    const response = await request
      .get("/pro")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
    expect(response).toBeDefined;
    expect(response).toBeTruthy;
    expect(response.body[0].name_pro).toEqual("phone");
    expect(response.body.length).toEqual(1);
    // console.log("here is product");
    // console.log(response.body[0].name_pro==="phone");
    // console.log("here is product");
  });
  it("show product with id", async () => {
    const response = await request
      .get("/pro")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
    expect(response).toBeDefined;
    const product = response.body[0];
    expect(product.id).toEqual(1);
  });
  
});
