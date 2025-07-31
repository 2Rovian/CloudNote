import { Router } from "express";
import noteRouter from "./noteRouter.js";

const router = Router();
router.use(noteRouter);

export { router };