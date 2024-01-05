const {User} = require('../Model/userModel')
const {saveToDb} = require('../Db/export')


const addUserToDb = async (userInfo) => {
    userInfo['pfp'] = 'default';
    userInfo['askedQuestions'] = [];
    userInfo['answeredQuestions'] = [];
    userInfo['followers'] = [];
    userInfo['following'] = [];
    userInfo['drafts'] = [];

    try {
        const result = await saveToDb(new User(userInfo));
        return result.success ? result : null;
    } catch (error) {
        console.error('Error in addUserToDb:', error);
        return null;
    }
};

module.exports = { addUserToDb };



