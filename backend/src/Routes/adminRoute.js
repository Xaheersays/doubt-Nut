const express = require('express');
const { hasToken ,isAdmin} = require('../Middlewears/export');
const {deleteQuestion,sortReportCategory} =require('../Util/export');
const { fetchDocumentFromDb } = require('../Db/fetchDocumentFromDb');
const { Report } = require('../Model/reportModel');
const router = express.Router();
router.use(hasToken)
router.use(isAdmin)
router.get('/',async(req,res)=>{
    
    res.send('admin bosh')

})
//getting particular report
router.get('/report/:reportId',async(req,res)=>{
    const reportId = req.params.reportId
    const rDoc = await fetchDocumentFromDb(Report,{_id:reportId})
    if(!rDoc){
        return res.send({success:false , message:'cant fetch rn'})
    }
    return res.send({success:true,message:'successfully fetched document',report:rDoc})

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


//getting all reports
router.get('/reports/:pg?',async(req,res)=>{
    const pageSize = 10 // Number of documents per page
    const pageNumber = parseInt(req.params.pg) || 1
    const skipValue = (pageNumber - 1) * pageSize;
    try{
        const data = await Report.find({}).skip(skipValue).limit(pageSize)
        return res.send({success:true,message:'fetched data successfully',data })
    }catch(err){
        console.error(err)
        return res.send({success:false,message:'cant fetched data ',data:[] })
    }

})
module.exports = router