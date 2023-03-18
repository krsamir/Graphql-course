const { config } = require('dotenv');
const { ApolloServer, gql } = require('apollo-server');
const sessionAPI = require('./datasources/sessions');
config();
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const dataSources = () => ({ sessionAPI: new sessionAPI() });
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server
  .listen({ port: process.env.PORT || 5000 })
  .then(({ url }) => console.log(`App is running on ${url}`));
// Resolver: A function that is responsible for populating the data for a single field in your schema
// Resolver map:  A big object that holds all of those Type -> Field -> Resolver Functions

// Field level Directives
// @include(if: Boolean!)
// @skip(if: Boolean!
// @deprecated (reason: String)
