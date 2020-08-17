const { buildSchema } = require('graphql');
const citySchema = require('./city');
const countrySchema = require('./country');
const tourSchema = require('./tour');
const contactSchema = require('./contact');
const chatSchema = require('./chat');

module.exports = buildSchema(`

${countrySchema}
${citySchema}
${tourSchema}
${contactSchema}
${chatSchema}

type RootQuery {
    cities: [City!]!
    tours(params:String): [Tour!]!
    contacts(params:String): [Contact!]!
    chats: [Chat!]!
}
type RootMutation {
    contactsAdd(params:String): Contact!
  }

schema {
    query: RootQuery
    mutation:RootMutation
}
`);
