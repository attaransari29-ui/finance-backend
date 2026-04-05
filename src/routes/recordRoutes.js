import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

const router = express.Router();

router.post("/", auth, authorize("admin"), createRecord);
router.get("/", auth, authorize("analyst", "admin"), getRecords);
router.put("/:id", auth, authorize("admin"), updateRecord);
router.delete("/:id", auth, authorize("admin"), deleteRecord);

export default router;