import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    description: String,
    status: Boolean,
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

export default Category;
