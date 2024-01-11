const { Report } = require("../../Model/export");
const {getDocFromToken} = require('../userUtils/getDocFromToken')

const reportQuestion = async({questionId,category,token})=>{
    const uDoc = await getDocFromToken(token)
    const reporterId = uDoc._id
    if(!reporterId){
        return {success:false , message:'cant find reporterId'}
    }
    const resp = await Report.incrementReportCount(questionId,category,reporterId)
    return resp
}
module.exports = {reportQuestion}