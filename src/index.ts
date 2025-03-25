import express from "express";
import helloRouter from "./api/hello"


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API routes
app.use("/api/hello", helloRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Express + TypeScript Server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
