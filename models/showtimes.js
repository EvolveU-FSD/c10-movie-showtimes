import mongoose from "../mongoose.js";

const showTimeSchema = mongoose.Schema({
  movieTitle: String,
  startTime: Date,
  runTime: Number,
  rating: String,
  genre: String,
  synopsis: String,
});

const Showtime = mongoose.model("showtime", showTimeSchema);

const showtimes = await Showtime.find();

console.log(showtimes);
