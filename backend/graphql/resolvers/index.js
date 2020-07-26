const cityResolver = require('./city');
const tourResolver = require('./tour');

const rootResolver = {
  ...cityResolver,
  ...tourResolver,
};

module.exports = rootResolver;