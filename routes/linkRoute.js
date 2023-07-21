import express from "express";
import linkController from "../controller/linkController.js";

const router = express.Router();

router.get("/", linkController);

export default router;
