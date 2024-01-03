const {mongoose} = require('../Db/connectToDb')
const {User} = require('../Model/userModel')
const {saveToDb} = require('../Db/export')

const addUserToDb = async(userInfo) =>{  
    userInfo['pfp'] = 'default'
    userInfo['askedQuestion'] = []
    userInfo['answeredQuestion'] = []
    userInfo['followers'] = []
    userInfo['following'] = []

    const userDoc =  new User(userInfo)
    const results = await saveToDb(userDoc)
    if(!results.success){
        return null
    }
    return results;

}
module.exports = {addUserToDb}

