import mongoose from "../mongoose.js";

const showTimeSchema = mongoose.Schema({
  movieTitle: String,
  startTime: String,
  runTime: Number,
  rating: String,
  genre: String,
  synopsis: String,
});

const Showtime = mongoose.model("showtime", showTimeSchema);

export const createShowtime = async (newShowtime) => {
  const createdShowtime = await Showtime.create(newShowtime);
  return createdShowtime._id;
};
