const { config } = require("dotenv");
const { ApolloServer, gql } = require("apollo-server");
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

const server = new ApolloServer({ typeDefs });
server
  .listen({ port: process.env.PORT || 5000 })
  .then(({ url }) => console.log(`App is running on ${url}`));
