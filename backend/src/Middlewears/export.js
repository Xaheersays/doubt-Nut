const {hasToken} =require('./User/hasToken')
const {validateUserInput} =require('./User/validateUserInput')
const {duplicateUser} =require('./User/duplicateUser')
const {usernameExists} = require('./User/usernameExists')
const {questionBelongsToUser} = require('./Question/questionBelongsToUser')
const {questionInDrafts} = require('./Question/questionInDraft')

module.exports = {
    hasToken,validateUserInput,duplicateUser,usernameExists,questionBelongsToUser,questionInDrafts
} 