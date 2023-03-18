const { gql } = require("apollo-server");

module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) =>
      dataSources.sessionAPI.getSessions(args),
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};
