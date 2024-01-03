const {jwt} = require('../../Util/jwtUtil')
const  hasToken = (req,res,next) => {  
    const token = req.headers.authorization
    const resp = jwt.verifyToken(token)
    if (!resp){
        return res.status(403).json({
            success:false,
            message: 'authorization token missing'
        })

    }
    next()
}
module.exports = {hasToken}