import { Router } from "express";
import { Register } from "../controles/register";
import { Login } from "../controles/login";
import { resetPassword } from "../controles/restpassword";


const router = Router();

router.post("/register", Register);
router.post('/login',Login)
router.post("/reset-password", resetPassword);


export default router;
