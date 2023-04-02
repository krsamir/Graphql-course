module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id);
  },
  addNewSession: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.addNewSession(args);
  },
};
