const Chat = require("../../models/chat")

module.exports = {
    chats: async () => {
      try {
        return await Chat.find();       
      } catch (err) {
        throw err;
      }
    },
}