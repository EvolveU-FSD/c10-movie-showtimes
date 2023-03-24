import express from "express";
import { createShowtime } from "../models/showtimes.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newShowtime = req.body;
  try {
    const id = await createShowtime(newShowtime);
    res.send(`Success, added ${newShowtime.movieTitle} - ${id}`);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

export default router;
