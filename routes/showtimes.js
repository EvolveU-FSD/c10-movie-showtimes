import express from "express";
import { createShowtime } from "../models/showtimes.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newShowtime = req.body;
  console.log(newShowtime);
  const id = await createShowtime(newShowtime);
  res.send(`Success, added ${newShowtime.movieTitle} - ${id}`);
});

export default router;
