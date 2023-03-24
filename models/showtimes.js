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
  try {
    const createdShowtime = await Showtime.create(newShowtime);
    return createdShowtime._id;
  } catch (error) {
    if ((error.code = 11000)) {
      throw new Error("Duplicate Error");
    }
  }
};
