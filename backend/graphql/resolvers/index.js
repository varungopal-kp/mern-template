const cityResolver = require('./cities');
const tourResolver = require('./tours');
const contactResolver = require('./contacts');
const chatsResolver = require('./chats');

const rootResolver = {
  ...cityResolver,
  ...tourResolver,
  ...contactResolver,
  ...chatsResolver
};

module.exports = rootResolver;