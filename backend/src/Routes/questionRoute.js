const express = require('express');
const router = express.Router();
const {hasToken} = require('../Middlewears/User/hasToken')
const {reportQuestion} =require('../Util/reportUtils/reportQuestion')

router.post('/:questionId/report',hasToken,async(req,res)=>{
    const questionId = req.params.questionId
    const {category} = req.body
    const token  = req.headers.authorization
    const result = await reportQuestion({questionId,category,token})
    res.send(result)    

})

module.exports = router;
