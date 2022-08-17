const { config } = require("dotenv");
const { ApolloServer, gql } = require("apollo-server");
const sessions = require("./data/sessions.json");
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
    level: String
  }
`;

const resolvers = {
  Query: {
    sessions: () => sessions,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: process.env.PORT || 5000 })
  .then(({ url }) => console.log(`App is running on ${url}`));

// Resolver: A function that is responsible for populating the data for a single field in your schema
//Resolver map:  A big object that holds all of those Type -> Field -> Resolver Functions
