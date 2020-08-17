var axios = require('axios');
const url = process.env.URL;

module.exports = function (server) {
  const io = require('socket.io')(server);
  io.origins('*:*');

  io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
      console.log('message: ' + msg.chatId);
      socket.join(msg.chatId);
      io.emit('chat message', msg.message);
      axios
        .post(url + '/chat', {
          data: {
            user: msg.chatId,
            message: msg.message,
          },
        })
        .catch((error) => error);
    });
  });
};
