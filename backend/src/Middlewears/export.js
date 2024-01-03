const {hasToken} =require('../Middlewears/hasToken')
const {validateUserInput} =require('../Middlewears/validateUserInput')
const {duplicateUser} =require('../Middlewears/duplicateUser')

module.exports = {
    hasToken,validateUserInput,duplicateUser
}