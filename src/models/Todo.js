import mongoose, { ObjectId, model } from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    task: String,
    status: Boolean,
    categoryId: { type: ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);

export default Todo;
