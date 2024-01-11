const {hasToken} =require('./User/hasToken')
const {validateUserInput} =require('./User/validateUserInput')
const {duplicateUser} =require('./User/duplicateUser')
const {usernameExists} = require('./User/usernameExists')
const {questionBelongsToUser} = require('./Question/questionBelongsToUser')
const {questionInDrafts} = require('./Question/questionInDraft')
const {commentBelongsToUser} = require('./Comment/commentBelongsToUser')
const {questionIdPresent} = require('./Question/questionIdPresent')
const {commentIdPresent} = require('./Comment/commentIdPresent')
const {isAdmin} = require('./Admin/isAdmin')
module.exports = {
    hasToken,validateUserInput,duplicateUser,usernameExists,questionBelongsToUser,questionInDrafts,commentBelongsToUser,questionIdPresent,commentIdPresent,isAdmin
} 