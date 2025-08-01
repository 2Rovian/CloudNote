import { Router } from "express";
import noteRouter from "./noteRouter.js";
import authRoute from "./authRoute.js"

const router = Router();
router.use(noteRouter);
router.use(authRoute);

export { router };