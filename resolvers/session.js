const { ApolloError } = require("apollo-server");
const _ = require("lodash");

module.exports = {
  speakers: async (session, arg, { dataSources }) => {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
      return returns;
    } catch (error) {
      return new ApolloError("speaker data not available", "SPEAKER_ERROR", {
        token: "SPEAKER_API",
      });
    }
  },
};
