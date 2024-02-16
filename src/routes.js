import { Router } from "express";
import TodoController from "./controllers/TodoController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("api node express running");
});

router.get("/todo_list", TodoController.index);
router.post("/todo_add", TodoController.store);
router.get("/todo/:id", TodoController.show);
router.put("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.delete);

export default router;
