import express from "express";
import showtimesRouter from "./routes/showtimes.js";
const app = express();
const PORT = 3000;

app.use("/showtimes", showtimesRouter);

app.get("/test", (req, res) => {
  res.send("test endpoint working");
});
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
