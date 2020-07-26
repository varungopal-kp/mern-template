var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({ 
    name: 'string',    
});

module.exports = mongoose.model('Country', countrySchema);