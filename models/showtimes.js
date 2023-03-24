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

export const listShowtimes = async () => {
  const allShowtimes = await Showtime.find();
  return allShowtimes;
};

export const updateShowtime = async (id, newShowtimeData) => {
  const response = await Showtime.findByIdAndUpdate(id, newShowtimeData, {
    new: true,
  });
  return response;
};

export const deleteShowtime = async (id) => {
  const response = await Showtime.findByIdAndDelete(id);
  return response;
};

export const findAllShowtimesByGenre = async (genre) => {
  const showtimes = await Showtime.find({ genre });
  return showtimes;
};

export const findOneShowtimeByMovieTitle = async (title) => {
  const showtime = await Showtime.findOne({ movieTitle: title });
  return showtime;
};

export const findShowtimeById = async (id) => {
  const showtime = await Showtime.findById(id);
  return showtime;
};
