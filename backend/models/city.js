var mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true },toObject: { virtuals: true },id: false  };

var citySchema = new mongoose.Schema(
  {
    name: String,
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country',
    },
  },
  opts
);

citySchema.virtual('cityCountry').get(function () {
  return `${this.name} ${this.country.name}`;
});

module.exports = mongoose.model('City', citySchema);
