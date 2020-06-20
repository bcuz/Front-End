require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../data/dbconfig");
const { generateToken } = require("./token-service.js");
const router = express.Router();
const User = require("../data/dbHelpers/studentDb");

router.post("/register", (req, res) => {
  let user = req.body;

  if (!user.username || !user.password) {
    return res.status(400).json({ message: 'Need username and password' })
  }

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  User.insertStudent(user)
    .then(saved => {
      const token = generateToken(saved); 

      res.status(201).json({
        message: `${saved.username} is logged in`,
        token, 
        id:saved.id
      });      
    })   
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  const creds = req.body;
  db("students")
    .where({ username: creds.username })
    .first()
    .then(user => {
        // console.log(user)
      if (user) {      
        if (bcrypt.compareSync(creds.password, user.password)) {
          const token = generateToken(user); 
          res.status(200).json({
            message: `${user.username} is logged in`,
            token, 
            id:user.id
          });      
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      } else {
        res.status(404).json({ message: 'user not found' })
      } 
    })
    .catch(() =>
      res.status(500).json({ message: "Please try logging in again." })
    );
});

module.exports = router;
