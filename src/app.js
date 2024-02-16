import express from "express";
import TodoController from "./controllers/TodoController.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello word!dddd 4");
});

app.get("/todo", TodoController.index);

export default app;
