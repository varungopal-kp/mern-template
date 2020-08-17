var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({ 
    user: String,    
    message: [String], 
    reply: String,    
      
});

module.exports = mongoose.model('Chat', chatSchema);