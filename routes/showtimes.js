import express from "express";
import {
  createShowtime,
  deleteShowtime,
  findAllShowtimesByGenre,
  findOneShowtimeByMovieTitle,
  listShowtimes,
  updateShowtime,
} from "../models/showtimes.js";

const router = express.Router()

router.post("/", async (req, res) => {
  const newShowtime = req.body;
  try {
    const id = await createShowtime(newShowtime);
    res.send(`Success, added ${newShowtime.movieTitle} - ${id}`);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allShowtimes = await listShowtimes();
    res.send(allShowtimes);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const showtime = await findShowtimeById();
    res.send(showtime);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const newShowtime = req.body;
  try {
    const updatedShowtime = await updateShowtime(id, newShowtime);
    res.send(updatedShowtime);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedShowtime = await deleteShowtime(id);
    res.send(deletedShowtime);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/genre/:genre", async (req, res) => {
  const genre = req.params.genre;
  try {
    const showtimes = await findAllShowtimesByGenre(genre);
    res.send(showtimes);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/title/:title", async (req, res) => {
  const title = req.params.title;
  try {
    const showtime = await findOneShowtimeByMovieTitle(title);
    res.send(showtime);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;
