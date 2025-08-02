import { Router } from "express";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import { getUsers, handleLogin, handleRegister } from "../controllers/authController.js";

const router = Router()

router.get('/api/users', getUsers);

router.post('/api/auth/register', handleRegister);

router.post('/api/auth/login', handleLogin);

export default router;