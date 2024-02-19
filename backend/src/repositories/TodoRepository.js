import Todo from "../models/Todo.js";
import Category from "../models/Category.js";

class TodoRepository {
  //CREATE - create a new todos
  async create(req) {
    try {
      const { task, status, categoryId } = req.body;

      //check if task exists
      const task_exist = await Todo.findOne({ task });

      if (task_exist) {
        return "This task already exist";
      }

      //Add todo
      const newTodo = await Todo.create({ task, status, categoryId });

      // If Something went wrong return error
      if (!newTodo) {
        return "Something went wrong, try again later";
      }

      // If todo was created successfully, return todo
      return newTodo;
    } catch (error) {
      return error;
    }
  }

  //FIND ALL - Select all todos
  async findAll() {
    try {
      const todos = await Todo.find().sort({ createdAt: "desc" }).populate("categoryId");

      //check if todos exists
      if (todos) {
        return todos;
      } else {
        return "Todos list empty";
      }
    } catch (error) {
      return error;
    }
  }

  //FIND BY ID - Select todo by id
  async findById(id) {
    try {
      const todo = await Todo.findById(id).populate("categoryId");

      //check if todo exist
      if (todo) {
        return todo;
      } else {
        return "Todo not exist";
      }
    } catch (error) {
      return error;
    }
  }

  //UPDATE BY ID - Select todo by id
  async update(req, id) {
    try {
      const { task, status, categoryId } = req.body;
      const todo = await Todo.findById(id).populate("categoryId");

      //check if todo exist
      if (todo) {
        if (task) todo.task = task;
        if (status) todo.status = status;
        if (categoryId) todo.categoryId = categoryId;

        //save
        await todo.save();
        return todo;
      } else {
        return "Todo not exist";
      }
    } catch (error) {
      return error;
    }
  }

  //DELETE todo
  async delete(id) {
    try {
      const todo = await Todo.findById(id);

      //check if todo exist
      if (todo) {
        await Todo.findByIdAndDelete(id);
        return todo;
      } else {
        return "Todo not exist";
      }
    } catch (error) {
      return error;
    }
  }
}

export default new TodoRepository();
