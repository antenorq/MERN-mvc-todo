import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    task: String,
    status: Boolean,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);

export default Todo;
