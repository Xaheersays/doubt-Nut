const  {User} = require('../Model/export')
const {isalreadyPresentInDb} = require('../Db/export')

const duplicateUser = async(req,res,next) =>{    
    const {username} = req.body
    const resp = await isalreadyPresentInDb(User,{username})

    if (resp){  
        res.status(403).json({
            success:false,
            message:'username already reagistered'
        })
    }
    next()

}
module.exports = {duplicateUser}