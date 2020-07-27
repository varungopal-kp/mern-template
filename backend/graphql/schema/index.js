const { buildSchema } = require('graphql');
const citySchema = require('./city');
const countrySchema = require('./country');
const tourSchema = require('./tour');
const contactSchema = require('./contact');

module.exports = buildSchema(`

${countrySchema}
${citySchema}
${tourSchema}
${contactSchema}

type RootQuery {
    cities: [City!]!
    tours(params:String): [Tour!]!
}
type RootMutation {
    contactsAdd(params:String): Contact!
  }

schema {
    query: RootQuery
    mutation:RootMutation
}
`);
