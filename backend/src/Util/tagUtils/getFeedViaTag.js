const { Tag, Question } = require('../../Model/export');

const getFeedViaTag = async (tag) => {
  try {
    const tagDocument = await Tag.findOne({ name: tag.trim().toLowerCase() });

    if (!tagDocument) {
      return [];
    }

    const questions = tagDocument.questions;
    const feed = [];

    for (const qid of questions) {
      const result = await Question.findById(qid);

      if (result) {
        feed.push(result);
      }
    }

    return feed;
  } catch (err) {
    console.error(err);
    return [];
  }
};

module.exports = { getFeedViaTag };
