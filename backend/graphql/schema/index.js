const { buildSchema } = require('graphql');
const citySchema = require('./city');
const countrySchema = require('./country');
const tourSchema = require('./tour');

module.exports = buildSchema(`

${countrySchema}
${citySchema}
${tourSchema}

type RootQuery {
    cities: [City!]!
    tours(params:String): [Tour!]!
}

schema {
    query: RootQuery
    
}
`);
