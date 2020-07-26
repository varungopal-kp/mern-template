const City = require("../../models/city")
const Country = require("../../models/country")

module.exports = {
    cities: async () => {
      try {
        return await City.find().populate('country');       
      } catch (err) {
        throw err;
      }
    },
}