var mongoose = require('mongoose');

var tourSchema = new mongoose.Schema({
  name: 'string',
  description: 'string',
  image: 'string',
  fromDate: 'string',
  toDate: 'string',
  lat: 'string',
  lon: 'string',
  people: 'string',
  price: 'string',
  star: 'string',
  type: 'string',
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

module.exports = mongoose.model('Tour', tourSchema);
