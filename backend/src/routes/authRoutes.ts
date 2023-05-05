import { Router } from "express";
import authController from "../controllers/auth/authController";

import { createValidator } from "express-joi-validation";
const validator = createValidator({ });
const router = Router();

router.post(
  "/login",
  validator.body(authController.postLogin.loginSchema),
  authController.postLogin.postLogin
);

router.post(
  "/register",
  validator.body(authController.postRegister.registerSchema),
  authController.postRegister.postRegister
);

export default router;
