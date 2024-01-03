const {jwt} = require('../Util/jwtUtil')
const decodeToken = (token)=>{
    const resp = jwt.decodeToken(token)
    if (!resp){
        return { success:false,message:'wrong token provided' }
    }
    return {success:true,message:'token decoded successfully',data:resp}
}

module.exports = {decodeToken}