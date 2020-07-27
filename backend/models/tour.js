var mongoose = require('mongoose');

var tourSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  fromDate: String,
  toDate: String,
  lat: String,
  lon: String,
  people: String,
  price: String,
  star: String,
  type: String,
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

module.exports = mongoose.model('Tour', tourSchema);
