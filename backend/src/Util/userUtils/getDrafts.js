const {  getDocFromToken } = require('../userUtils/getDocFromToken')

const getDrafts = async(token)=>{
    const doc = await getDocFromToken(token)
    if (!doc){
        return {
            success:false,
            message:'cant get drafts'
        }
    }
    return {
        success:true,
        message:'successfully fetched drafts',
        drafts:doc.drafts
    }
    

}

module.exports = {getDrafts}