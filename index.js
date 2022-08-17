const { config } = require("dotenv");
const { ApolloServer, gql } = require("apollo-server");
const sessionAPI = require("./datasources/sessions");
config();

const typeDefs = gql`
  type Query {
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit in a single track, we will be migrating to a tags based system in the future"
      )
    level: String
  }
`;

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) =>
      dataSources.sessionAPI.getSessions(),
  },
};

const dataSources = () => ({ sessionAPI: new sessionAPI() });
const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server
  .listen({ port: process.env.PORT || 5000 })
  .then(({ url }) => console.log(`App is running on ${url}`));

// Resolver: A function that is responsible for populating the data for a single field in your schema
//Resolver map:  A big object that holds all of those Type -> Field -> Resolver Functions

// Field level Directives
// @include(if: Boolean!)
// @skip(if: Boolean!
// @deprecated (reason: String)
