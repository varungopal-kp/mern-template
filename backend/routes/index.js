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
  res.json({ user, token }).status(200);
});

router.post('/chat', async function (req, res, next) {
  const { data } = req.body;

  if (data.admin) {
    const user = await Chat.findOne({ user: data.admin });
    
    if (user) {
      const chat = {
        user:  data.user,
        message: data.message,
        time: data.time,
      };
      user.chats.push(chat);
      user.save();
    }
  }else{
    const user = await Chat.findOne({ user: data.user });
    
    if (user) {
      const chat = {
        user:  data.user,
        message: data.message,
        time: data.time,
      };
      user.chats.push(chat);
      user.save();
    } else {
      const newChat = {
        user: data.user,
        chats: {
          user: data.user,
          message: data.message,
          time: data.time,
        },
        time: data.time,
      };
      const chat = await new Chat(newChat);
      chat.save();
    }
  }
  
  res.status(200).json();
});

module.exports = router;
