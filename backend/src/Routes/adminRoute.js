const express = require('express');
const { hasToken ,isAdmin} = require('../Middlewears/export');
const router = express.Router();

router.get('/',hasToken,isAdmin,async(req,res)=>{
    
    res.send('admin bosh')

})

router.get('/reports/:category/',hasToken,isAdmin,async(req,res)=>{
    
})

router.get('/reports/delete/:reportId',hasToken,isAdmin,async(req,res)=>{

})

module.exports = router