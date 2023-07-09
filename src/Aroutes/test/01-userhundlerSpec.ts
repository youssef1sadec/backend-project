import app from "../../index";
import superset from "supertest";

const request = superset(app);
export var token: string = "";

describe("user hundlers", () => {
  it(" create the user and token ", async () => {
    const response = await request.post("/users").send({
      first_name: "joe",
      last_name: "hopes",
      email: "gogo1",
      pass: "password",
    });
    token = response.body.token;
    // console.log(response.body.first_name);
   expect(response.status).toBe(200);
    expect(response).toBeDefined;
    expect(response.body.first_name).toEqual("joe");
    expect(response.body.last_name).toEqual("hopes");
    expect(response.body.email).toEqual("gogo1");
  });

  it("show all users", async () => {
    const response = await request
    .get("/users")
    .auth(token, { type: "bearer" }); 
    // console.log("hererer",response.body.first_name,"herer +12");
    expect(response.status).toBe(200);
    expect(response.body[0].last_name).toEqual("hopes");
    expect(response.body[0].id).toEqual(1);
    expect(response.body.length).toBe(1);
    expect(response).toBeTruthy;
  });
  it("get one user by id", async () => {
    const response = await request
      .get("/users/1") //here
      .auth(token, { type: "bearer" });
      // console.log("hereerere ya joe2");
    // console.log(response.body);
    // console.log("hereerere");
    expect(response.status).toBe(200);
    expect(response.body[0].id).toEqual(1);
    expect(response).toBeTruthy; // here
  });
  it("token check ", async () => {
    const res = await request.get("/users");
    expect(res.status).toBeFalse;
  });
  it(" delete the user", async () => {
    const response = await request
      .delete("/users/1")
      .auth(token, { type: "bearer" });
    // console.log(response.body + " deleted successfully");
    expect(response.status).toBe(200);
  });
});
