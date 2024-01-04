const {userType} = require('../../Types/userType')

const validateUserInput = (req,res,next)=>{
   
    const { username ,password  } = req.body
    const result = userType.safeParse({username,password})
    if (!result.success){
        return res.status(400).json({
            success:false,
            message:'some required fields are missing'

        })
    }
    next()


}

module.exports={validateUserInput}