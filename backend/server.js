/* import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3700;

const URL = process.env.URL;

app.listen(PORT, () => {
  console.log(` server is running: ${URL}${PORT}`);
});
 */

const app = require("./app");

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`);
});
