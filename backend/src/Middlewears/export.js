const {hasToken} =require('./User/hasToken')
const {validateUserInput} =require('./User/validateUserInput')
const {duplicateUser} =require('./User/duplicateUser')
const {usernameExists} = require('./User/usernameExists')

module.exports = {
    hasToken,validateUserInput,duplicateUser,usernameExists
}