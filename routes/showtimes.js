import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const newShowtime = req.body;
  const id = createShowtime(newShowtime);
  res.send(`Success, added ${newShowtime.movieTitle} - ${id}`);
});

export default router;
