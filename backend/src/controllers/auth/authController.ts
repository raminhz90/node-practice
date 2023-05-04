import { Request, Response } from "express";
import postLogin from "./postLogin";
import postRegister from "./postRegister";
const authController = {
  postLogin,
  postRegister,
};

export default authController;
