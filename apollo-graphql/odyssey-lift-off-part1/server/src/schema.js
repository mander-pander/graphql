//gql is a tagged template literal, used for wrapping GraphQL strings like a schema definition
//This converts GraphQL strings into the format that Apollo libraries expect when working with
//operations and schemas, and it also enables syntax highlighting.
const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        "the track's description, can be in Markdown format"
        description: String
        "number of times a track has been viewed"
        numberOfViews: Int
        "The track's complete array of Modules"
        modules: [Module!]!
    }
    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
    "A Module is a single unit of teaching. Multiple Modules produce a Track"
    type Module {
        id: ID!
        "The Module's title"
        title: String!
        "The Module's length in minutes"
        length: Int
    }
`;
module.exports = typeDefs;
