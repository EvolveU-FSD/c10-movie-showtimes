import mongoose from "../mongoose.js";

const showTimeSchema = mongoose.Schema({
  movieTitle: { type: String, required: true },
  startTime: {
    type: String,
    required: true,
    unique: true,
  },
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
