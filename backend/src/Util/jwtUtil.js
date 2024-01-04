class JWT {

    jwt = require('jsonwebtoken')
    JWT_PASSWORD = '3njdf303@!(@*(!*@'

    sign (obj) {
        const token = this.jwt.sign(obj,this.JWT_PASSWORD);
        return token
    }

    verifyToken(token){
        try{
            const decoded = this.jwt.verify(token,this.JWT_PASSWORD)
            return true;
    
        }catch(e){
            console.error('the token is not valid ',e)
            return false
        }
    }
    
    decodeToken(token){
        try{
            const decoded = this.jwt.decode(token)
            const {username,password} = decoded
            return  {username:username,password:password}
        }
        catch(e){
            return null
        }   
    }


}


const jwt = new JWT()

module.exports = {jwt}

