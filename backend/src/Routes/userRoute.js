const express = require('express');
const router = express.Router();
const {hasToken,validateUserInput,duplicateUser,usernameExists} =require('../Middlewears/export')
const {addUserToDb,getDocFromToken,jwt,safeParseQuestion,addFollower, removeFollower} =require('../Util/export')
const{saveToDb,fetchDocumentFromDb} = require('../Db/export');
const { User } = require('../Model/userModel');



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

        //this is another user's username
        // this route will get username's pfp , count ,askedQuestion,answered Question
router.get('/:username/followers',hasToken,async (req, res) => {
    const {username} = req.params
    const results = await fetchDocumentFromDb(User,{username})
    console.log(results)
    if(!results){
        return res.status(400).json({success:false,message:'could not fetch followers'})
    }
    const followers = results.followers;
    return res.status(201).json({
        success:true,
        message:'fetched all followers ',
        followers,
        followersCount:followers.length
    })

}); 


router.get('/:username/following',hasToken,async (req, res) => {
    const {username} = req.params
    const results = await fetchDocumentFromDb(User,{username})
    console.log(results)
    if(!results){
        return res.status(400).json({success:false,message:'could not fetch following'})
    }
    const following = results.following;
    return res.status(201).json({
        success:true,
        message:'fetched all followings ',
        following,
        followingCount:following.length
    })
}); 



router.post('/:username/follow',hasToken,usernameExists,async (req, res) => {
    const token = req.headers.authorization
    const userOneDoc = await getDocFromToken(token)
    const { username } = req.params;
    const followStatus = req.query.follow;
    const userTwoDoc = await fetchDocumentFromDb(User,{username})
    
    if (followStatus==='true'){
        var  resp = await addFollower(userOneDoc,userTwoDoc)
    }
    else{
        var resp = await removeFollower(userOneDoc,userTwoDoc)
     }
    return res.json(resp)

  });




module.exports = router;
 