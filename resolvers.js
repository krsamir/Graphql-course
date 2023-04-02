const Query = require("./resolvers/query");
const Session = require("./resolvers/session");
const Mutation = require("./resolvers/Mutation");

module.exports = {
  Query,
  Session,
  Mutation,
};

/**
 * schema and resolver structure should match
 * we are building resolver for type session
 */
