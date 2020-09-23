const Chat = require("../../models/chat")

module.exports = {
    chats: async () => {
      try {
        return await Chat.find();       
      } catch (err) {
        throw err;
      }
    },
    chatDelete: async (parms) => {
      const {id}=parms
      try {
        return await Chat.remove({_id:id});       
      } catch (err) {
        throw err;
      }
    },
}