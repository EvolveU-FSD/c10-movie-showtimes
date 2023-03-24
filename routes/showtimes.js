import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("Working");
});

export default router;
