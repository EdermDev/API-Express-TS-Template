import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

const PORT = 3000;

app.get("/", (_, res) => {
  res.send("<h2>The API Template is working!</h2>");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
