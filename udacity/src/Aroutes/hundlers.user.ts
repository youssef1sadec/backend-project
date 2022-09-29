import bodyParser from "body-parser";
import { Application, Response, Request, NextFunction } from "express";
import { users } from "../types/users.types";
import { UsersController } from "../model/user";
import data from "../database";
import JWT from "jsonwebtoken";
import verifyAuthToken from "./middle"
const usersInfo = new UsersController();

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await usersInfo.index();
    res.json(users);
  } catch (error: unknown) {
    res.status(404);
    res.json({ error: error });
  }
};
const getOneUser = async (req: Request, res: Response) => {
  try {
    const userid = req.params.id;
    const user = await usersInfo.show(userid);
    res.json(user);
  } catch (error: unknown) {
    res.status(404);
    res.json({ error: error });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const usersInformations: users = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      pass: req.body.pass,
    };
    // console.log(usersInformations);
    // console.log("\n lol");
    const newUser = await usersInfo.create(usersInformations) as unknown as users[];
    const token = JWT.sign({ newUser }, data.tokenin as unknown as string);
    const newu = {
      id: newUser[0].id,
      first_name: newUser[0].first_name,
      last_name: newUser[0].last_name,
      email: newUser[0].email,
      pass: newUser[0].pass,
      token: token,
    };
    // console.log("here");
    // console.log(newUser, typeof newUser);
    // console.log("here!");
    // console.log(newu);
    res.json(newu);
  } catch (error: unknown) {
    res.status(404);
    res.json({ error: error });
  }
};//delete user
const destroyOneRow = async (req: Request, res: Response) => {
  try {
    const deleted = await usersInfo.delete(req.params.id);
    // console.log(deleted);
    res.json(deleted);
  } catch (err) {
    console.log(err + " destroy");
    res.status(404);
    res.json({ error: err });
  }
};

// update the user's information'

// const updateUser = async (req: Request, res: Response) => {
//   try {
//     const user = await usersInfo.update(req.body);
//     res.json({ status: "yay success", user: user });
//   } catch (error) {
//     console.log(error + " update");
//     res.status(404);
//     res.json({ error: error });
//   }
// };



///ALTER SEQUENCE  users_id_seq RESTART WITH 1;
const usersRoutes = (app: Application) => {
  app.use(bodyParser.json());
  app.get("/users",verifyAuthToken,getAllUsers); // show all users
  app.get("/users/:id",verifyAuthToken,getOneUser); // get one user
  app.post("/users", createUser); //create user
  app.delete("/users/:id",verifyAuthToken,destroyOneRow); // delete user
};
export default usersRoutes;
