import { Router } from "express";
import { Register } from "../controle/register";
import { Login } from "../controle/login";
import { resetPassword } from "../controle/restpassword";

import { Handler } from "express";
import handler from "../controle/dashboard";
const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/reset-password", resetPassword);
router.post("/send", handler);

export default router;
