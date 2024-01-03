const z= require('zod')
const userType = z.object({
    username:z.string().required(),
    password:z.string().required()
})
module.exports = {userType}