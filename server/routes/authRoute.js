import { Router } from "express";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt"
import { createUser, getUsers } from "../controllers/authController.js";

const router = Router()

router.get('/api/users', getUsers);

router.post('/api/user/register', createUser);

export default router;