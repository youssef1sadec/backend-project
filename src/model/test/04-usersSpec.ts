import { users } from "../../types/users.types";
import { UsersController } from "../user";
const userTest = new UsersController();

describe("user function db test ", () => {
  it("test  function ", () => {
    //show
    expect(userTest.show).toBeDefined();
    expect(userTest.show).toBeTruthy();
    //index
    expect(userTest.index).toBeDefined();
    expect(userTest.index).toBeTruthy();
    //crete
    expect(userTest.create).toBeDefined();
    expect(userTest.create).toBeTruthy();
    //delete
    expect(userTest.delete).toBeDefined();
    expect(userTest.delete).toBeTruthy();
  });

  it("test  function with create", async () => {
    const result = (await userTest.create({
      first_name: "joe2",
      last_name: "hopes2",
      email: "gogo2",
      pass: "password",
    })) as unknown as users[];
    // console.log("here is the result funco");
    // console.log(result);
    // console.log("here is the result funco");
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result[0].first_name).toEqual("joe2");
    expect(result[0].last_name).toEqual("hopes2");
    expect(result[0].id).toEqual(3);
  });
  //show  user test function

  it("test  function with show specific id" , async () => {
    const result = (await userTest.show("3")) as unknown as users[];
    console.log("here is the result funco");
    console.log(result.length);
    console.log("here is the result funco");
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result.length).toBe(1);
  });
  //show  alll
  it("test  function with show  all users", async () => {
    const result = (await userTest.index()) as unknown as users[];
    console.log("here is the result funco");
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    console.log(result.length);
    expect(result.length).toBe(2);
  });
});
