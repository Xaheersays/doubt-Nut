const  {User} = require('../../Model/export')
const {isalreadyPresentInDb} = require('../../Db/isalreadyPresentInDb')

const duplicateUser = async(req,res,next) =>{    
    const {username} = req.body
    
    const present = await isalreadyPresentInDb(User,{username})
   

    if (present){  
        return res.status(403).json({
            success:false,
            message:'username already reagistered'
        })
    }
    next()

}
module.exports = {duplicateUser}