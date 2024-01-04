const { isalreadyPresentInDb } = require("../../Db/export");
const { User } = require("../../Model/export");

const usernameExists = async(req,res,next)=>{
    const { username } = req.params;
    const result = await isalreadyPresentInDb(User,{username})
    if (!result){
        return res.status(404).json({
            success:false,
            messge:'username does not exists'
        })
    }
    next()

}
module.exports = {usernameExists}