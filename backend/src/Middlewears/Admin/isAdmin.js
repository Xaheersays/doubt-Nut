const { getDocFromToken } = require("../../Util/userUtils/getDocFromToken")

const isAdmin = async(req,res,next)=>{
    const token = req.headers.authorization
    const result =await getDocFromToken(token)
    if (!result){
        return res.send(result)
    }
    if(!result.isAdmin){
        return res.send({success:false ,message:'no access / protected access '})
    }
    next()
}

module.exports = {isAdmin}