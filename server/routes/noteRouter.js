import { Router } from "express";
import {
    deleteNote,
    getNoteById,
    getNotes,
    patchNote,
    postNote,
    updateNote
} from "../controllers/noteController.js";
import { checkToken } from "../controllers/checkToken.js";

const router = Router()

router.get("/api/notes/:user_id", checkToken, getNotes);

router.get("/api/notes/:note_id", checkToken, getNoteById);

router.post("/api/notes", checkToken, postNote);

router.delete("/api/notes/:note_id", checkToken, deleteNote);

router.patch("/api/notes/:note_id", checkToken, patchNote);

router.put("/api/notes/:note_id", checkToken, updateNote);

export default router;