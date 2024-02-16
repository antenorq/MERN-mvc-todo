import Todo from "../models/Todo.js";

class TodoController {
  async index(req, res) {
    try {
      const todos = await Todo.find().sort({ createdAt: "desc" });

      //check if todos exists
      if (todos) {
        res.status(200).json(todos);
      } else {
        res.status(422).json({ errors: ["Todos list empty"] });
        return;
      }
    } catch (error) {
      res.status(500).json({ errors: [error.message] });
    }
  }
  show() {}
  store() {}
  update() {}
  delete() {}
}
export default new TodoController();
