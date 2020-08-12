const City = require('../../models/city');
const Tour = require('../../models/tour');

module.exports = {
  tours: async (params={}) => {
   let queries={}
    if (params.params) {
       queries  = JSON.parse(params.params);       
    }

    try {
      return await Tour.find(queries).populate('city');
    } catch (err) {
      throw err;
    }
  },
};
