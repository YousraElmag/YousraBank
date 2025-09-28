import { Router } from "express";
import { Register } from "../controle/register";
import { Login } from "../controle/login";
import { resetPassword } from "../controle/restpassword";
import  {transferMoney} from '../controle/transferService'
import  {requestMoney} from  '../controle/requestmoney'
    const router = Router();

router.post("/register", Register);
router.post('/login',Login)
router.post("/reset-password", resetPassword);
router.post('/send', transferMoney)
router.post('/request',requestMoney)

export default router;
