var axios = require('axios');
const url = process.env.URL;

module.exports = function (server) {
  const io = require('socket.io')(server);
  const newRooms = []
  io.origins('*:*');

  io.on('connection', (socket) => {
    const user = socket.handshake.query['user'];
   
    socket.on('chat', (msg) => {
      if (user) {
       
        io.emit(user, msg.message);
        axios
          .post(url + '/chat', {
            data: {
              user: msg.chatId,
              message: msg.message,
            },
          }).then(data=>{
            if(!newRooms.includes(user)){
              newRooms.push(user)
              io.emit('newRoom', user);
              console.log(newRooms)
            }
          })
          .catch((error) => error);

         
      }
    });
  });
};
