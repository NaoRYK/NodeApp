import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js"
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(indexRoutes)

app.use(express.static(join(__dirname, "public")));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
