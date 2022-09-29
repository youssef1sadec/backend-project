import { Response, Request, NextFunction } from "express";
import data from "../database";
import JWT from "jsonwebtoken";
const verifyAuthToken = (req: Request, res: Response, next: NextFunction):void => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(" ")[1];
    const decoded = JWT.verify(token, data.tokenin as unknown as string);
    // console.log("this real 1", decoded, "this real 2",token, "this real 3",authorizationHeader);
      next();
    } catch (error: unknown) {
        res.status(401).json({
            status :"rejected"  ,
            message: "Invalid authorization coz there is no token"
        })
    }
  };
  export default verifyAuthToken