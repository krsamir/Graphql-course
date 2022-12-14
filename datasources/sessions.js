const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");
const { parse } = require("dotenv");
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
    return session[0];
  }
}

module.exports = sessionAPI;
