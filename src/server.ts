import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bfhlRoute from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));


app.use("/bfhl", bfhlRoute);


app.get("/", (_req, res) => {
  return res.send("API is running. Use POST /bfhl");
});


app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  return res.status(500).json({ is_success: false, error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
