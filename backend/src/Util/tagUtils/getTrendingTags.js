const {Tag} = require('../../Model/export')
const getTrendingTags = async(limit)=>{
    try{
        const trending = await Tag.find().sort({ count: 1 }).limit(limit);;
        return {success:true,message:'successfully fetched trending tags',trending}
    }catch(err){
        console.error(err)
        return {success:false,message:'cant fetch trending tags due to internal db errors',trending:[]}
    }
    
}

module.exports = {getTrendingTags}