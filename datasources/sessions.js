const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class sessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    throw new Error();
    return session[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }
  addNewSession({ session }) {
    session.id = 12;
    sessions.push(session);
    // console.log(session);
    return session;
  }
}

module.exports = sessionAPI;
