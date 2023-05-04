import { Router } from "express";
import authController from "../controllers/auth/authController";
const router = Router();

router.post("/register", authController.postLogin);

router.post("/login", authController.postRegister);


export default router;