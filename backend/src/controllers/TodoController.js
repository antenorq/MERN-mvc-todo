import TodoRepository from "../repositories/TodoRepository.js";

class TodoController {
  //INDEX - LIST ALL TODOS
  async index(req, res) {
    const result = await TodoRepository.findAll();
    res.status(200).json(result);
  }

  //SHOW - show a specific todo
  async show(req, res) {
    const { id } = req.params;
    const result = await TodoRepository.findById(id);
    res.status(200).json(result);
  }

  //STORE - INSERT new todo
  async store(req, res) {
    const result = await TodoRepository.create(req);
    res.status(200).json(result);
  }

  //UPDATE - Update a todo
  async update(req, res) {
    const { id } = req.params;
    const result = await TodoRepository.update(req, id);
    res.status(200).json(result);
  }

  //DELETE
  async delete(req, res) {
    const { id } = req.params;
    const result = await TodoRepository.delete(id);
    res.status(200).json(result);
  }
}

export default new TodoController();
