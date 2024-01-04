const { fetchDocumentFromDb } = require('../../Db/export')
const {User} = require('../../Model/export')
const {decodeToken} =require('../decodeToken')

const getDocFromToken = async(token)=>{ 
    const  {username,password} =  decodeToken(token).data
    const res = await fetchDocumentFromDb(User,{username,password})
    return res
}
module.exports = {getDocFromToken}

