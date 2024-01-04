const express = require('express');
const router = express.Router();
const {hasToken,validateUserInput,duplicateUser} =require('../Middlewears/export')
const {addUserToDb,getDocFromToken,jwt,safeParseQuestion} =require('../Util/export')
const{saveToDb} = require('../Db/export')


router.get('/', (req, res) => {

  
});


router.post('/register',validateUserInput,duplicateUser,async(req,res)=>{
    const {username,password} = req.body
    const userInfo = {username,password}
    const result = await addUserToDb(userInfo)
    console.log(result)
    if(!result){
        return res.status(403).json({success:false,message:'user could not saved'})
    }
    result.token = jwt.sign({username,password})
    return res.status(201).json(result)
})


router.post('/postQuestion',hasToken,async(req,res)=>{
    const token = req.headers.authorization
    // token to get username 
    // search by usrname -> getDoc from db -> push it specified array | draft || askedQuestion
    const userDoc = await getDocFromToken(token)

    const {title,content,images,tags,status} =  req.body

    const question = {
        title,content,images,tags,
        upvotes:[],
        downvotes:[],
        answers:[],
        lastUpdated:new Date(Date.now()),
        createdAt:new Date(Date.now()),
        status
    }

    const result = safeParseQuestion(question)
    if (!result){
        return res.status(403).json({
            success:false,
            message:'some thing went wrong question format '
        })
    }
    if(status==='inactive'){
        userDoc.drafts.push(question)
    }else{
        userDoc.askedQuestions.push(question)
    }
    const resp = await saveToDb(userDoc)
    if (!resp.success){
        return res.status(403).json({...resp,message:'could not post the question'})
    }
    return res.status(201).json({...resp,message:'question saved to db'})

})




module.exports = router;
 