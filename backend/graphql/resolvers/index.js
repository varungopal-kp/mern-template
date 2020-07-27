const cityResolver = require('./cities');
const tourResolver = require('./tours');
const contactResolver = require('./contacts');

const rootResolver = {
  ...cityResolver,
  ...tourResolver,
  ...contactResolver,
};

module.exports = rootResolver;