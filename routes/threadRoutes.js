require('dotenv').config();
const express = require("express");
const db = require("../data/dbHelpers/threadHelpers.js");
const router = express.Router();
const {authenticate} = require('../auth/authenticate.js');

router.get("/",authenticate, async (req, res) => {
  try {
    const students = await db.getAllThreads(req.body);
    res.status(200).json(students);
  } catch (error) {
    res.status(500), json(error);
  }
});

router.get("/:id",authenticate, async (req, res) => {
  try {
    const  id = req.params.id;
    const students = await db.getThreadById(id);
    if (students) {
      res.status(200).json(students);
    } else {
      res
        .status(404)
        .json({ message: "The specified thread does not exist." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Thread information could not be retrieved." });
  }
});
router.get("/comments/:id",authenticate, async (req, res) => {
  try {
    const  id = req.params.id;
    const students = await db.getThreadWithCommentById(id);
    if (students) {
      res.status(200).json(students);
    } else {
      res
        .status(404)
        .json({ message: "The specified thread does not exist." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Thread information could not be retrieved." });
  }
});

router.post("/", authenticate, async(req, res)=>{
    try{
        const thread = await db.postThread(req.body);

        res.status(200).json(thread);
    }
    catch(error){
        res.status(500)
        .json({error:"thread could not be posted"})
    }

})



module.exports = router;