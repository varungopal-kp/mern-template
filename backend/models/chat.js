var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({ 
    user: String,    
    chats: [], 
    time: String,    
      
});

module.exports = mongoose.model('Chat', chatSchema);