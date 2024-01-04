const {fetchDocumentFromDb} = require('../../Db/export')
const {User} =  require('../../Model/export')
const getBasicInfo = async(username,password)=>{
    const doc = await fetchDocumentFromDb(User,{username})
    if (!doc){
        return {success:false,message:'database internal errors'}
    }
    if (password===doc.password){
        const {pfp,followers,following,askedQuestions,answeredQuestions,drafts} = doc
        return {pfp,followers,following,askedQuestions,answeredQuestions,drafts}
    } 
    else{
        const  {pfp,followers,following,askedQuestions,answeredQuestions} = doc
        return {pfp,followers,following,askedQuestions,answeredQuestions}
    }

}
module.exports = {getBasicInfo}