require('dotenv').config()
const express = require('express');
const router = express.Router();
const {generateToken} = require('../auth/token-service');
const studentRouter = require('./studentRoutes');
const threadRouter = require('./threadRoutes.js');
const authRouter = require('../auth/authRoutes');
const commentRouter = require('./commentsRoutes.js');
const db = require('../data/dbconfig');



router.use('/students',studentRouter,authRouter);
router.use('/threads',threadRouter)
router.use('/comment', commentRouter)

router.get('/', generateToken, (req, res) => {
	db('students')
		.select('id', 'username')
		.then(users => {
			res.json({ users, decodedToken: req.decodedToken })
		})
		.catch(() => {
			res.status(500).json({ message: 'You shall not pass!' })
		})
})

module.exports = router;