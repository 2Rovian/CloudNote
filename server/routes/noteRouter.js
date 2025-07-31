import { Router } from "express";
import {
    deleteNote,
    getNoteById,
    getNotes,
    patchNote,
    postNote,
    updateNote
} from "../controllers/noteController.js";

const router = Router()

router.get("/api/notes", getNotes);

router.get("/api/notes/:note_id", getNoteById);

router.post("/api/notes", postNote);

router.delete("/api/notes/:note_id", deleteNote);

router.patch("/api/notes/:note_id", patchNote);

router.put("/api/notes/:note_id", updateNote);

export default router;