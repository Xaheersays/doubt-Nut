const  {User} = require('../Model/export')
const {isalreadyPresentInDb} = require('../Db/export')

const duplicateUser = async(req,res,next) =>{    
    const {username} = req.body
    console.log('dupl',username)
    const present = await isalreadyPresentInDb(User,{username})
    console.log(present)

    if (present){  
        return res.status(403).json({
            success:false,
            message:'username already reagistered'
        })
    }
    next()

}
module.exports = {duplicateUser}