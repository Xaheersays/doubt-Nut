const {jwt} = require('./jwtUtil')
const {userType} = require('../Types/userType')

const getToken = (userInfo)=>{
    const results = userType.safeParse(userInfo)
    if(!results.success){
        return {
            success:false,
            message:'required fields are missing'
        }
    }
    return {
        success:true,
        message:'token generated',
        token : jwt.sign(userInfo)
    }
}

module.exports = {getToken}