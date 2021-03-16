import { Router } from "express";
import UserController from "../controllers/user-controller";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/", UserController.add);
router.put("/", UserController.update);
router.delete("/", UserController.delete);

export default router;
