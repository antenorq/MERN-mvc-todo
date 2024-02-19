import mongoose from "mongoose";
import { config } from "dotenv";
config();

//connection
const dbUser = process.env.DB_USER;
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);

console.log(dbUser);

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.y9pxsuw.mongodb.net/MERN-mvc-todo?retryWrites=true&w=majority`
    );
    console.log("Database Connected!! " + dbUser);

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

export default conn;
