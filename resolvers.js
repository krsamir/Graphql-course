const Query = require("./resolvers/query");
const Session = require("./resolvers/session");
const Mutation = require("./resolvers/Mutation");

module.exports = {
  Query,
  Session,
  Mutation,
  Room: {
    EUROPA: "Europa",
    SOL: "Sol",
    SATURN: "Saturn",
  },
};

/**
 * schema and resolver structure should match
 * we are building resolver for type session
 */
