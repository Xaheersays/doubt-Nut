const { fetchDocumentFromDb } = require('../../Db/export')
const {User} = require('../../Model/export')
const {jwt} = require('../jwtUtil')
const getDocFromToken = async(token)=>{ 
    const {username,password} =  jwt.decodeToken(token)
    const res = await fetchDocumentFromDb(User,{username,password})

    return res
}
module.exports = {getDocFromToken}

