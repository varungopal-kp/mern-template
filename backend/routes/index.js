const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Chat = require('../models/chat');
const privateKey = process.env.ACCESS_TOKEN_SECRET;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async function (req, res, next) {
  const { credentials } = req.body;

  if (!credentials) return res.status(401).json({ message: 'Failed' });

  const user = await User.findOne(credentials).lean().exec();

  if (!user) return res.status(401).json({ message: 'Failed' });

  const token = jwt.sign(user, privateKey);
  req._user = user;
  res.json({ user, token });
});

router.post('/chat', async function (req, res, next) {
  const { data } = req.body;
  const user = await Chat.findOne({ user: data.user });
  if (user) {
    user.message.push(data.message);
    user.save();
  } else {
    const chat = await new Chat(data);
    chat.save();
  }
  res.status(200).json();
});

module.exports = router;
