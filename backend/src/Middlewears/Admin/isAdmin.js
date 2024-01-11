const { getDocFromToken } = require("../../Util/userUtils/getDocFromToken")

const isAdmin = async(req,res,next)=>{
    const token = req.headers.authorization
    const result =await getDocFromToken(token)
    if (!result.success){
        return result
    }
    if(!result.isAdmin){
        return {success:false ,message:'no access / protected access '}
    }
    next()
}

module.exports = {isAdmin}