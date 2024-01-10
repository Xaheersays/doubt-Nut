const { fetchDocumentFromDb } = require('../../Db/export')
const { User } = require('../../Model/userModel')
const {decodeToken} = require('../decodeToken')
const getUidFromToken = async(token)=>{
    const {username} = decodeToken(token).data
    if (!username){
        return null
    }
    const userDoc = await fetchDocumentFromDb(User,{username})
    if(!userDoc)return null
    return userDoc._id


}

module.exports = {getUidFromToken}