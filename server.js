import app from "./src/app.js";
import conn from "./src/database/db_connection.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server working on port: " + PORT);
});
