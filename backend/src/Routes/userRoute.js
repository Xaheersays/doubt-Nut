const express = require('express');
const router = express.Router();
const {hasToken,validateUserInput,duplicateUser} =require('../Middlewears/export')
const {addUserToDb} =require('../Util/export')

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
    return res.status(201).json(result)
  

})


router.post('/postQuestion',hasToken,(req,res)=>{
    const token = req.headers.authorization 
    
})

module.exports = router;
 