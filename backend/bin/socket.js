var axios = require('axios');
const url = process.env.URL;

module.exports = function (server) {
  const io = require('socket.io')(server);
  const newRooms = [];
  io.origins('*:*');

  io.on('connection', (socket) => {
    const user = socket.handshake.query['user'];

    socket.on('chat', (msg) => {
      if (user) {
        const emit = {
          user: user,
          message: msg.message,
          time: msg.time,
        };
        io.emit(user, emit);
        if(msg.chatId){
          io.emit(msg.chatId, emit);
        }
        axios
          .post(url + '/chat', {
            data: {
              user: user,
              message: msg.message,
              admin: msg.chatId || false,
              time: msg.time,
            },
          })
          .then((data) => {
            if (!newRooms.includes(user)) {
              newRooms.push(user);
              io.emit('newRoom', user);
              console.log(newRooms);
            }
          })
          .catch((error) => error);
      }
    });
  });
};
