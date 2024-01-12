const express = require('express');
const { hasToken ,isAdmin} = require('../Middlewears/export');
const {deleteQuestion,sortReportCategory} =require('../Util/export')
const router = express.Router();
router.use(hasToken)
router.use(isAdmin)
router.get('/',async(req,res)=>{
    
    res.send('admin bosh')

})
router.get('/:reportId',async(req,res)=>{
    
})
// getting data cat wise
router.get('/reports/:reportId/sort/category',async(req,res)=>{
    const cat = req.query.category
    const reportId = req.params.reportId
    const data = await sortReportCategory(reportId,cat)
    res.send(data)

})

router.post('/reports/delete/:reportId',async(req,res)=>{
    const reportId  = req.params.reportId
    const result =await deleteQuestion(reportId)
    return res.send(result)
})

module.exports = router