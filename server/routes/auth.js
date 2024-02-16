// auth.js in routes folder
import express from "express";
const router = express.Router();

 import { requireSignin } from "../middlewares/index.js";

import { register, login, logout, currentUser,sendTestEmail,forgotpassword ,resetpassword} from '../controllers/auth.js';

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.get("/send-email", sendTestEmail);
router.post("/forgot-password", forgotpassword);

router.post("/reset-password", resetpassword);
export default router;
