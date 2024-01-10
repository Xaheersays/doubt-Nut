
const {mongoose} = require('../Db/connectToDb');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 1,
  },
  questions : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question' 
  }]
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = {Tag};
