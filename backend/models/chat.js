var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({ 
    user: String,    
    chats: [], 
    reply: String,    
      
});

module.exports = mongoose.model('Chat', chatSchema);