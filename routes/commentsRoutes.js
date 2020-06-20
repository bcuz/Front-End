require("dotenv").config();
const express = require("express");
const db = require("../data/dbHelpers/commentsHelpers.js");
const router = express.Router();
const { authenticate } = require("../auth/authenticate.js");

router.post("/", authenticate, async (req, res) => {
  try {
    const comment = await db.postComment(req.body);

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Your Comment could not be posted" });
  }
});

module.exports = router;
