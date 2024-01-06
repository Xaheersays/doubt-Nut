const express = require('express');
const router = express.Router();
const {hasToken,validateUserInput,duplicateUser,usernameExists,questionBelongsToUser,questionInDrafts} =require('../Middlewears/export')
const {addUserToDb,getDocFromToken,jwt,addFollower, removeFollower,getBasicInfo,decodeToken,getDrafts, addUpvote, addDownvote} =require('../Util/export')
const{fetchDocumentFromDb} = require('../Db/export');
const { User } = require('../Model/userModel');
const {addQuestion,removeQuestion,getQuestionFromId} = require('../Util/postQuestionUtils/export')



router.get('/', (req, res) => {

  
});


router.post('/register',validateUserInput,duplicateUser,async(req,res)=>{
    const {username,password} = req.body
    const userInfo = {username,password}
    const result = await addUserToDb(userInfo)
    if(!result){
        return res.status(403).json({success:false,message:'user could not saved'})
    }
    result.token = jwt.sign({username,password})
    return res.status(201).json(result)
})


router.post('/postQuestion',hasToken,async(req,res)=>{
    const token = req.headers.authorization
    const {title,content,images,tags,status} =  req.body
    const question = {
        title,content,images,tags,status
    }
    const result = await addQuestion(token,question,status)
    return res.status(201).json(result)
})


router.delete('/question/:questionId',hasToken,questionBelongsToUser,async(req,res)=>{
    //this quid shud be present in db and also in userdocs asked/draft
    //now question is atleast present in users doc
    // lets delete it from question collen and user's doc
    const token = req.headers.authorization
    const qid = req.params.questionId
    const {questionType} = req.body
    const result = await removeQuestion(qid,token,questionType)
    return res.send(result  )



})

router.get('/question/drafts/:questionId',hasToken,questionBelongsToUser,async(req,res)=>{
    const qid = req.params.questionId
    const qDoc  = await getQuestionFromId(qid);
    if (!qDoc){
        return res.status(404).json({
            success:false,
            message:'cant fetched question from draft'
        })
    }
    if (qDoc.status==='active'){
        return res.send({success:false,message:'this question is in active not in drafts'})
    }
    return res.status(201).json({success:true,
        message:'fetched question from draft',
        question:qDoc
    })
})

router.get('/question/:questionId',questionInDrafts,async(req,res)=>{
    const qid =req.params.questionId
    const qDoc = await getQuestionFromId(qid)
    return res.send(qDoc)
    

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

//route gives basic info from uname,pfp,flw,flwin,askedQues,answeredQues
router.get('/:username/profile',usernameExists,async(req,res)=>{
    const {username} = req.params
    const token = req.headers.authorization
    const {password} = decodeToken(token)?.data
    const data = await getBasicInfo(username,password)
    return res.status(200).json({
        success:true,
        message:'successfully fetched user info',
        data
    })

}) 


router.get('/getDrafts',hasToken,async(req,res)=>{
    const token = req.headers.authorization
    const result = await  getDrafts(token)
    return res.status(200).json(result)


})



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


//this route is /user/usernmae/question id/vote?vote=true or false
// measns user is accessing username's quesution id  and voting it
router.post('/:username/:questionId/vote',hasToken,usernameExists,questionInDrafts,async(req,res)=>{
    // i want user id ->current user  then qid rest is done 
    const token = req.headers.authorization
    const userDoc =await getDocFromToken(token)
    const uid = userDoc._id;
    const vote = req.query.vote;
    const qid = req.params.questionId
    if (vote==='true'){
        const upvote  = await addUpvote(uid,qid)
        res.send(upvote)
    }
    else{
        const downvote = await addDownvote(uid,qid)
        res.send(downvote)
    }
    // upvote and downvote 
    //will do 
})



module.exports = router;
  